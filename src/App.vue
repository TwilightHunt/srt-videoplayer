<script setup lang="ts">
import { ref } from "vue";
import { Player, AddVideo, Subtitles, AddSubs } from "./components";

const videoSource = ref();
const subText = ref();

const selectVideo = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files![0];
  videoSource.value = URL.createObjectURL(file);
};

const selectSubs = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files![0];
  const reader = new FileReader();
  reader.onload = (event) => (subText.value = event!.target!.result);
  reader.onerror = (error) => console.log(error);
  reader.readAsText(file);
};
</script>

<template>
  <main class="main">
    <div class="container">
      <h1 class="title text-center my-5">Enjoy your video! :)</h1>
      <add-video v-if="!videoSource" @onSelect="selectVideo" />
      <player v-else :src="videoSource" :subs="subText" type="video/mp4" />
      <subtitles v-if="subText" :src="subText" />
      <add-subs v-else-if="videoSource" @onSelect="selectSubs" />
    </div>
  </main>
</template>

<style scoped></style>
