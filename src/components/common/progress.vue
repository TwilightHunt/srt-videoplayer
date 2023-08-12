<script setup lang="ts">
interface ProgessProps {
  value: number;
}

defineProps<ProgessProps>();
</script>

<template>
  <progress id="progress" class="cursor-pointer progress" />
</template>

<style lang="scss" scoped>
progress {
  -webkit-appearance: none;
  width: 100%;
  height: clamp(1rem, 2vw, 1.5rem);
  --bs-progress-border-radius: 0;
}
::-webkit-progress-bar {
  background-color: #fff;
}
::-moz-progress-bar {
  background-color: #0f9625;
}
</style>
