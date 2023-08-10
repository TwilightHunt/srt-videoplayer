<script setup lang="ts">
import { ref } from "vue";
import { Player } from "./components";

const source = ref(
  "https://v4.cdnpk.net/videvo_files/video/free/video0483/large_watermarked/_import_60d962f06b3ef8.86089157_FPpreview.mp4"
);
</script>

<template>
  <main class="main">
    <div class="container">
      <h1 class="title text-center my-5">Enjoy your video! :)</h1>
      <player :src="source" type="video/mp4" />
    </div>
  </main>
</template>

<style scoped></style>
