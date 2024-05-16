<template>
  <div class="d-flex justify-space-evenly">
    <v-btn
      v-for="(company, idx) of companies"
      small
      icon
      color="white"
      @click="toggleCompany(company)"
      :class="{ selected: selectedCompany === company.company._id }"
      :key="idx"
    >
      <img style="width: 25px" :src="company.company.iconUrl" />
      <v-tooltip activator="parent" anchor="bottom">
        {{ company.company.name }}
      </v-tooltip>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from "vue";
import { useStore } from "vuex";

const emit = defineEmits(["onSelectedCompany"]);

const $store = useStore();

interface Company {
  [key: string]: any;
}

const companies = ref<Company[]>($store.getters['authModule/getCompanies']);

const selectedCompany = ref<string | null>($store.getters["authModule/getCurrentCompany"].company._id,);

function toggleCompany(company) {
  if (selectedCompany.value === company.company._id) {
    return (selectedCompany.value = null);
  }

  selectedCompany.value = company.company._id;
}

watch(
  selectedCompany,
  () => {
    emit("onSelectedCompany", selectedCompany.value);
  },
  { immediate: true }
);
</script>

<style scoped></style>
