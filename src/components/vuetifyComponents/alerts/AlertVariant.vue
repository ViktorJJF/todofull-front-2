<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Alert Variant -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The variant prop provides an easy way to change the overall style of your
      alerts. Together with other props like density, prominent, border, and
      shaped, it allows you to create a unique and customized component.
    </p>
    <div class="mt-4">
      <v-alert
        color="primary"
        icon="mdi-flash"
        title="Contained Flat (Default)"
      >
        Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit.
        Maecenas egestas arcu quis ligula mattis placerat. Praesent metus
        tellus, elementum eu, semper a, adipiscing nec, purus.
      </v-alert>

      <br />

      <v-alert color="info" title="Contained Text">
        <div>
          Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et
          ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor
          urna a orci. Proin viverra, ligula sit amet ultrices semper, ligula
          arcu tristique sapien, a accumsan nisi mauris ac eros. Curabitur
          turpis.
        </div>

        <v-divider class="my-4 bg-light-blue-lighten-4"></v-divider>

        <div class="d-flex flex-row align-center justify-space-between">
          <div>
            Proin magna. Vivamus in erat ut urna cursus vestibulum. Etiam
            imperdiet imperdiet orci.
          </div>

          <v-btn color="info" variant="outlined"> Okay </v-btn>
        </div>
      </v-alert>

      <br />

      <v-alert
        color="primary"
        icon="mdi-fire"
        title="Outlined"
        variant="outlined"
      >
        Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit.
        Maecenas egestas arcu quis ligula mattis placerat. Praesent metus
        tellus, elementum eu, semper a, adipiscing nec, purus.
      </v-alert>

      <br />

      <v-alert
        border="start"
        color="success"
        density="compact"
        icon="mdi-clock-fast"
        title="Contained"
      >
        Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. Vestibulum
        facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae
        euismod ligula urna in dolor. Curabitur at lacus ac velit ornare
        lobortis.
      </v-alert>

      <br />

      <v-alert
        icon="mdi-cloud-alert"
        prominent
        title="Text"
        type="error"
        variant="text"
      >
        Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus
        tempus. Mauris turpis nunc, blandit et, volutpat molestie, porta ut,
        ligula. Duis leo.
      </v-alert>

      <br />

      <v-alert
        color="orange"
        density="compact"
        icon="mdi-note"
        prominent
        title="Plain"
        variant="plain"
      >
        Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. Vestibulum
        facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae
        euismod ligula urna in dolor. Curabitur at lacus ac velit ornare
        lobortis.
      </v-alert>
    </div>
  </div>
</template>
