import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

export const useSubtitlesStore = defineStore("subtitles", () => {
  const currentSubtitles: Ref<VTTCue | undefined> = ref();

  return { currentSubtitles };
});
