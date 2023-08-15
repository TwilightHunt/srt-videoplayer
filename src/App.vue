<script setup lang="ts">
import { ref } from "vue";
import { Player, AddVideo } from "./components";

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
  reader.onload = (event) => (subText.value = event!.target!.result); // desired file content
  reader.onerror = (error) => console.log(error);
  reader.readAsText(file);
};
</script>

<template>
  <main class="main">
    <div class="container">
      <h1 class="title text-center my-5">Enjoy your video! :)</h1>
      <player
        v-if="videoSource"
        :src="videoSource"
        :subs="subText"
        type="video/mp4"
      />
      <add-video v-else @onSelectVideo="selectVideo" />
      <subtitles v-if="subText" :source="subText" />
      <input v-else @input="selectSubs" type="file" accept=".vtt,pdf,.srt" />
    </div>
  </main>
</template>

<style scoped></style>
