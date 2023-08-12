<script setup lang="ts">
import { ref } from "vue";
import { Player, AddVideo } from "./components";

const source = ref();

const selectVideo = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files![0];
  source.value = URL.createObjectURL(file);
};
</script>

<template>
  <main class="main">
    <div class="container">
      <h1 class="title text-center my-5">Enjoy your video! :)</h1>
      <player v-if="source" :src="source" type="video/mp4" />
      <add-video v-else @onSelectVideo="selectVideo" />
    </div>
  </main>
</template>

<style scoped></style>
