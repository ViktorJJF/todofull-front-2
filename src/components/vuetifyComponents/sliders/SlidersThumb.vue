<script setup lang="ts">
import { ref } from "vue";

const satisfactionEmojis = ref([
  "😭",
  "😢",
  "☹️",
  "🙁",
  "😐",
  "🙂",
  "😊",
  "😁",
  "😄",
  "😍",
]);

const slider = ref(45);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SlidersThumb -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can display a <code>thumb-label</code> while sliding or always. It It
      can have a custom color by setting <code>thumb-color</code> and a custom
      size with <code>thumb-size</code>. With <code>always-dirty</code> its
      color will never change, even when on <code>min</code> value.
    </p>
    <div class="mt-4">
      <v-row>
        <v-col cols="12">
          <v-subheader class="pl-0">Show thumb when using slider</v-subheader>
          <v-slider v-model="slider" thumb-label></v-slider>
        </v-col>

        <v-col cols="12">
          <v-subheader class="pl-0">Always show thumb label</v-subheader>
          <v-slider v-model="slider" thumb-label="always"></v-slider>
        </v-col>

        <v-col cols="12">
          <v-subheader class="pl-0">Custom thumb size</v-subheader>
          <v-slider
            v-model="slider"
            :thumb-size="24"
            thumb-label="always"
          ></v-slider>
        </v-col>

        <v-col cols="12">
          <v-subheader class="pl-0">Custom thumb label</v-subheader>
          <v-slider v-model="slider" :thumb-size="24" thumb-label="always">
            <template v-slot:thumb-label="{ value }">
              {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
            </template>
          </v-slider>
        </v-col>
      </v-row>
    </div>
  </div>
</template>