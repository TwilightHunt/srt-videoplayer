<script setup lang="ts">
import { useSubtitlesStore } from "~/stores/subtitles";
const subStore = useSubtitlesStore();
</script>

<template>
  <div class="subtitles py-4">
    <h1 class="text-center">{{ subStore.currentSubtitles.text }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>
