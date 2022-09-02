<template>
  <div class="logo">
    <RouterLink to="/">
      <v-img
        aspect-ratio="1.7"
        contain
        src="/assets/images/logos/todofull.jpg"
      ></v-img>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
