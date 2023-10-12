<template>
  <v-select
    hide-details
    variant="outlined"
    :disabled="disabled"
    placeholder="Selecciona el estado de negociación"
    class="mt-3"
    v-model="selectedNegotiationStatuses"
    :items="negotiationStatuses"
    no-data-text="No se encontraron estados de negociación"
    outlined
    clearable
    density="compact"
  >
  </v-select>
</template>

<script>
export default {
  props: {
    initialData: {
      type: Object,
      default: {},
    },
    country: {
      type: String,
      default: "Chile",
    },
    // disabled: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data() {
    return {
      disabled: false,
      negotiationStatuses: [],
      selectedNegotiationStatuses: [],
      searchLabel: "",
      isInidialDataLoading: false,
      isInitialDataExecuted: false,
    };
  },
  watch: {
    selectedNegotiationStatuses: {
      handler(newValue, oldValue) {
        this.searchLabel = "";
        // if (this.selectedNegotiationStatuses) {
        this.$emit(
          "onSelectNegotiationStatuses",
          this.selectedNegotiationStatuses
            ? JSON.parse(JSON.stringify(this.selectedNegotiationStatuses))
            : null
        );
        this.disabled = true;
        setTimeout(() => {
          this.disabled = false;
        }, 0);
        // }
      },
      deep: true,
    },
  },
  async mounted() {
    console.log("MONTANDO NEGOTIATION");
    if (this.initialData) {
      this.selectedNegotiationStatuses = this.initialData._id;
    }
    // if (
    //   this.$store.state.negotiationStatusesModule.negotiationStatuses.length ===
    //   0
    // ) {
    await this.$store.dispatch("negotiationStatusesModule/list", {
      sort: "name",
      order: "asc",
      country: this.country,
    });
    // }
    this.negotiationStatuses =
      this.$store.state.negotiationStatusesModule.negotiationStatuses.map(
        (el) => ({
          value: el._id,
          title: el.name,
        })
      );
    console.log(
      "🚀 Aqui *** -> this.negotiationStatuses",
      this.negotiationStatuses
    );
  },
  methods: {
    async removeLabels(selectedLabels, label) {
      selectedLabels.splice(
        selectedLabels.findIndex((el) => el._id === label._id),
        1
      );
      this.$emit(
        "onSelectNegotiationStatuses",
        this.selectedNegotiationStatuses
      );
    },
    getLabelTitle(value) {
      const label = this.negotiationStatuses.find((el) => el.value == value);
      return label ? label.title : "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
