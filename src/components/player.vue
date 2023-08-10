<script setup lang="ts">
import { ref, type Ref } from "vue";
import { IconPlay, IconPause } from "~/components";

export interface PlayerProps {
  src: string;
}
defineProps<PlayerProps>();

const video: Ref<HTMLVideoElement | undefined> = ref();
const isVideoPlayed: Ref<boolean> = ref(false);
const progress: Ref<HTMLProgressElement | undefined> = ref();

const play = () => {
  video.value?.play();
  isVideoPlayed.value = true;
};

const pause = () => {
  video.value?.pause();
  isVideoPlayed.value = false;
};

const displayProgress = () => {
  const { duration, currentTime } = video.value as HTMLVideoElement;
  if (progress.value !== undefined) {
    progress.value.value = (100 * currentTime) / duration;
  }
};
const rewind = (event: MouseEvent) => {
  const target = event.target as HTMLProgressElement;
  const width = target.offsetWidth;
  const offsetX = event.offsetX;
  target.value = (100 * offsetX) / width;
  pause();
  if (video.value) {
    video.value.currentTime = video.value.duration * (offsetX / width);
  }
};
</script>

<template>
  <div class="player">
    <video @timeupdate="displayProgress" ref="video" class="player__video">
      <source :src="src" />
    </video>

    <div v-if="isVideoPlayed" class="player__icon" @click="pause">
      <icon-pause id="pause" />
    </div>
    <div v-else class="player__icon" @click="play">
      <icon-play id="play" />
    </div>
    <progress
      class="cursor-pointer player__progress"
      ref="progress"
      max="100"
      value="0"
      @mousedown="rewind"
    />
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
  &__progress {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 35px;
    padding: 1rem;

    width: 100%;
  }
}
</style>
