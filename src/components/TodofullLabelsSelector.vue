<template>
  <v-combobox
    hide-details
    variant="outlined"
    :disabled="disabled"
    placeholder="Selecciona las etiquetas"
    class="mt-3"
    :search-input.sync="searchLabel"
    v-model="selectedTodofullLabels"
    :items="filteredTodofullLabels"
    multiple
    no-data-text="No se encontraron etiquetas"
    outlined
    density="compact"
  >
    <template v-slot:selection="data">
      <v-chip
        close
        @click:close="removeLabels(selectedTodofullLabels, item)"
        color="primary"
      >
        <strong>{{ getLabelTitle(data.item.value) }}</strong>
      </v-chip>
    </template>
  </v-combobox>
</template>

<script>
export default {
  props: {
    initialData: {
      type: Array,
      default: () => [],
    },
    // disabled: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data() {
    return {
      disabled: false,
      todofullLabels: [],
      selectedTodofullLabels: [],
      searchLabel: "",
      isInidialDataLoading: false,
      isInitialDataExecuted: false,
    };
  },
  computed: {
    filteredTodofullLabels() {
      return this.todofullLabels.filter((el) => {
        return el.is_active;
      });
    },
  },
  watch: {
    // initialData: {
    //   handler() {
    //     if (!this.isInitialDataExecuted && this.initialData.length > 0) {
    //       this.selectedTodofullLabels = this.initialData.map((el) => el._id);
    //       this.isInitialDataExecuted = true;
    //     }
    //   },
    //   immediate: true,
    // },
    selectedTodofullLabels: {
      handler(newValue, oldValue) {
        this.searchLabel = "";
        this.$emit(
          "onSelectTodofullLabels",
          JSON.parse(JSON.stringify(this.selectedTodofullLabels))
        );
        this.disabled = true;
        setTimeout(() => {
          this.disabled = false;
        }, 0);
      },
      deep: true,
    },
  },
  async mounted() {
    console.log("montando...", this.initialData);
    this.selectedTodofullLabels =
      this.initialData?.map((el) => (typeof el === "string" ? el : el._id)) ||
      [];
    if (this.$store.state.todofullLabelsModule.todofullLabels.length === 0) {
      await this.$store.dispatch("todofullLabelsModule/list", {
        sort: "name",
        order: "asc",
        // is_active: true,
      });
    }
    this.todofullLabels =
      this.$store.state.todofullLabelsModule.todofullLabels.map((el) => ({
        value: el._id,
        title: el.name,
        is_active: el.is_active,
      }));
  },
  methods: {
    async removeLabels(selectedLabels, label) {
      selectedLabels.splice(
        selectedLabels.findIndex((el) => el._id === label._id),
        1
      );
      this.$emit("onSelectTodofullLabels", this.selectedTodofullLabels);
    },
    getLabelTitle(value) {
      const label = this.todofullLabels.find((el) => el.value == value);
      return label ? label.title : "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
