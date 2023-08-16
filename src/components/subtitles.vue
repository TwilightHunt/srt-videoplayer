<script setup lang="ts">
import srtParser2 from "srt-parser-2";
import { onMounted } from "vue";
import { useSubtitlesStore } from "~/stores/subtitles";
const subStore = useSubtitlesStore();

interface SubtitlesProps {
  src: string;
}
const props = defineProps<SubtitlesProps>();

onMounted(() => {
  displayTrack();
});

const displayTrack = () => {
  const video = document.getElementById("video") as HTMLVideoElement;
  const track = video.addTextTrack("captions", "Captions");
  const parser = new srtParser2();
  const srt_array = parser.fromSrt(props.src);
  track.addEventListener("cuechange", (ev) => {
    const target = ev.target as TextTrack;
    if (target.activeCues?.length) {
      const cue = target.activeCues[0] as VTTCue;
      subStore.currentSubtitles = cue;
    } else {
      subStore.currentSubtitles = "";
    }
  });
  srt_array.forEach(({ startSeconds, endSeconds, text }) => {
    track.addCue(new VTTCue(startSeconds, endSeconds, text));
  });
};
</script>

<template>
  <div v-if="subStore.currentSubtitles?.text" class="subtitles py-4">
    <h1 class="text-center">{{ subStore.currentSubtitles.text }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>
