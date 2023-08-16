<script setup lang="ts"></script>

<template>
  <div class="add-subs py-4">
    <input
      type="file"
      id="subs-file"
      accept=".vtt,pdf,.srt"
      @change="$emit('onSelect', $event)"
    />
    <label for="subs-file">
      <div class="add-subs__body">
        <icon-plus />
        <p class="m-0 p-3">+ Add subtitles</p>
      </div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.add-subs {
  & input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    & + label {
      font-size: 2rem;
      font-weight: 700;
      border-radius: 10px;
      text-align: center;
      display: block;
      border: 2px dashed #000;
    }
    & + label {
      cursor: pointer;
    }
  }
}
</style>
