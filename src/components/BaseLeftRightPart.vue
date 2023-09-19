<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const Lpart = ref(false);

function toggleLpart() {
  Lpart.value = !Lpart.value;
}
</script>

<template>
  <!---/Left chat list -->
  <div class="mainbox">
    <div
      v-if="!store.state.isChatOneToOne"
      class="left-part showLeftPart"
      :class="Lpart ? 'showLeftPart' : 'HideLeftPart'"
    >
      <slot name="channels"></slot>
      <slot name="leftpart"></slot>
    </div>

    <!---right chat conversation -->
    <div class="right-part">
      <div class="boxoverlay" v-if="Lpart" @click="toggleLpart"></div>
      <div class="toggleLeft hidden-md-and-up">
        <v-btn icon @click="toggleLpart" size="small">
          <vue-feather type="menu" class="feather-sm"></vue-feather>
        </v-btn>
      </div>

      <slot name="rightpart"></slot>
    </div>

    <!---right chat conversation -->
  </div>
</template>

<style lang="scss">
.mainbox {
  display: flex;
}
.left-part {
  width: 360px;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  transition: 0.1s ease-in;
  flex-shrink: 0;
  height: 100%;
}
.v-theme--light {
  .left-part {
    background: white;
  }
}
.v-theme--dark {
  .left-part {
    background: #2b2b2b;
  }
}
.right-part {
  width: 100%;
  position: relative;
}
.toggleLeft {
  position: absolute;
  right: 15px;
  top: 15px;
}
</style>
