<script setup lang="ts">
import { IconPlus } from ".";
</script>

<template>
  <div class="add">
    <input
      type="file"
      id="video-file"
      accept="video/mp4,video/x-m4v,video/*"
      @change="$emit('onSelectVideo', $event)"
    />
    <label for="video-file">
      <div class="add__body">
        <icon-plus />
        <p>Add a video first</p>
      </div>
    </label>
  </div>
</template>

<style scoped lang="scss">
.add {
  aspect-ratio: 16/9;
  & input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    & + label {
      font-size: 1.25em;
      font-weight: 700;
      display: inline-block;
      width: 100%;
      height: 100%;
      border: 6px dashed #000;
      border-radius: 10px;
      position: relative;
    }
    & + label {
      cursor: pointer;
    }
  }
  &__body {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    place-items: center;
    row-gap: 2rem;
    & p {
      font-size: clamp(2.2rem, 3vw, 2.8rem);
    }
    & svg {
      width: clamp(50px, 10vw, 100px);
      height: clamp(50px, 10vw, 100px);
    }
  }
}
</style>
