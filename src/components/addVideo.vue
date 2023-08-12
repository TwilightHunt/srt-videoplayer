<script setup lang="ts"></script>

<template>
  <div class="add">
    <input
      type="file"
      accept="video/mp4,video/x-m4v,video/*"
      @change="$emit('onSelectVideo', $event)"
    />
  </div>
</template>

<style scoped></style>
