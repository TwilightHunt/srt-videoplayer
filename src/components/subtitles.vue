<script setup lang="ts">
import { useSubtitlesStore } from "~/stores/subtitles";
const subStore = useSubtitlesStore();
</script>

<template>
  <div class="subtitles">
    <h1>{{ subStore.currentSubtitles.text }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>
