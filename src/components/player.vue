<script setup lang="ts">
import { ref, type Ref } from "vue";
import {
  IconPlay,
  IconPause,
  CommonProgress,
  IconVolumeHigh,
} from "~/components";

export interface PlayerProps {
  src: string;
}
defineProps<PlayerProps>();

const video: Ref<HTMLVideoElement | undefined> = ref();
const isVideoPlayed: Ref<boolean> = ref(false);
const displayedTime: Ref<string> = ref("00:00");

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
  const progress = document.getElementById("progress") as HTMLProgressElement;
  progress.value = (100 * currentTime) / duration;
  displayTime();
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

const padTime = (time: number) => {
  return time.toString().padStart(2, "0");
};

const changeVolume = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (video.value) {
    video.value.volume = parseInt(target.value) / 100;
  }
};

function displayTime() {
  const { currentTime } = video.value as HTMLVideoElement;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  const formattedTime = `${padTime(minutes)}:${padTime(seconds)}`;
  displayedTime.value = formattedTime;
}
</script>

<template>
  <div class="player">
    <video
      @ended="pause"
      @timeupdate="displayProgress"
      ref="video"
      class="player__video"
    >
      <source :src="src" />
    </video>
    <div class="player__mask">
      <div v-if="isVideoPlayed" class="player__icon" @click="pause">
        <icon-pause id="pause" />
      </div>
      <div v-else class="player__icon" @click="play">
        <icon-play id="play" />
      </div>
      <common-progress
        class="player__progress"
        max="100"
        value="0"
        @mousedown="rewind"
      />
      <div class="player__time">{{ displayedTime }}</div>
      <div class="player__volume d-flex align-items-center">
        <icon-volume-high />
        <input type="range" @input="changeVolume" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.player {
  position: relative;
  & video {
    width: 100%;
    height: 100%;
    display: flex;
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
    left: 0px;
    right: 0px;
    bottom: 35px;
  }
  &__mask {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.5s ease, opacity 0.5s ease;
    position: absolute;
    inset: 0;
    transition-delay: 3s;
    background: linear-gradient(
        180deg,
        transparent,
        rgba(0, 0, 0, 0.5) 77%,
        rgba(0, 0, 0, 0.5)
      )
      100% 100%/100% 50px no-repeat transparent;
  }
  &__time {
    position: absolute;
    bottom: 10px;
    left: 20px;
    z-index: 15;
    font-size: 1.4rem;
    color: #fff;
  }
  &__volume {
    position: absolute;
    right: 20px;
    bottom: 10px;
    column-gap: 1rem;
    & svg {
      height: 20px;
      width: 20px;
    }
  }
  &:hover .player__mask {
    visibility: visible;
    opacity: 1;
    transition: all 0.5s ease;
  }
}
</style>
