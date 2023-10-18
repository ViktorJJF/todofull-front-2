<template>
  <div class="d-flex justify-space-evenly">
    <v-btn
      v-for="(country, idx) of countries"
      small
      icon
      color="white"
      @click="toggleCountry(country)"
      :class="{ selected: selectedCountry === country.value }"
      :key="idx"
    >
      <img style="width: 25px" :src="country.icon" />
      <v-tooltip activator="parent" anchor="bottom">
        {{ country.value }}
      </v-tooltip>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from "vue";
import PeruFlagR from "@/assets/images/flags/peru.png";
import ChileFlagR from "@/assets/images/flags/chile.png";
import ColombiaFlagR from "@/assets/images/flags/colombia.png";
import EspaniaFlag from "@/assets/images/flags/espania.png";

const emit = defineEmits(["onSelectedCountry"]);

const countries = ref<any[]>([
  { value: "Peru", icon: PeruFlagR },
  { value: "Chile", icon: ChileFlagR },
  { value: "Colombia", icon: ColombiaFlagR },
  { value: "España", icon: EspaniaFlag },
]);
const selectedCountry = ref<string | null>("Chile");

function toggleCountry(country) {
  if (selectedCountry.value === country.value) {
    return (selectedCountry.value = null);
  }

  selectedCountry.value = country.value;
}

watch(
  selectedCountry,
  () => {
    emit("onSelectedCountry", selectedCountry.value);
  },
  { immediate: true }
);
</script>

<style scoped></style>
