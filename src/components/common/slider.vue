<script setup lang="ts">
import { ref } from "vue";

const slider = ref();
</script>

<template>
  <input ref="slider" type="range" class="slider" />
</template>

<style lang="scss" scoped>
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 15rem;
  overflow: hidden;
  border-radius: 5px;
}
input[type="range"]::-webkit-slider-runnable-track {
  background: rgba(255, 255, 255, 0.3);
  height: 0.5em;
  border-radius: 5px;
  overflow: hidden;
}
input[type="range"]::-moz-range-track {
  background: rgba(255, 255, 255, 0.3);
  height: 0.5rem;
  border-radius: 5px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 1px;
  width: 0px;
  background-color: rgb(255, 255, 255);
  box-shadow: -407px 0 0 407px #fff;
}
input[type="range"]::-moz-range-thumb {
  opacity: 0;
}
input[type="range"]::-moz-range-progress {
  background: #fff;
  border-radius: 5px;
  height: 0.5em;
}
</style>
