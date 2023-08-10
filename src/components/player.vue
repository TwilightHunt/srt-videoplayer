<script setup lang="ts">
import { ref, type Ref } from "vue";
import { IconPlay, IconPause } from "~/components";

export interface PlayerProps {
  src: string;
}
defineProps<PlayerProps>();

const video: Ref<HTMLVideoElement | undefined> = ref();
const isVideoPlayed: Ref<boolean> = ref(false);

const play = () => {
  video.value?.play();
  isVideoPlayed.value = true;
};

const pause = () => {
  video.value?.pause();
  isVideoPlayed.value = false;
};
</script>

<template>
  <div class="player">
    <video ref="video" class="player__video">
      <source :src="src" />
    </video>

    <div v-if="isVideoPlayed" class="player__icon" @click="pause">
      <icon-pause id="pause" />
    </div>
    <div v-else class="player__icon" @click="play">
      <icon-play id="play" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.player {
  position: relative;
  & video {
    width: 100%;
    height: 100%;
  }

  &__icon {
    cursor: pointer;
    & svg {
      position: absolute;
      inset: 0;
      margin: auto;
      width: clamp(50px, 10vw, 100px);
      height: 100px;
      transition: transform 0.2s ease;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
}
</style>
