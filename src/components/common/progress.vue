<script setup lang="ts">
interface ProgessProps {
  value: number;
}

defineProps<ProgessProps>();

interface CommonProgressEmits {
  (e: "update:modelValue", value: number): void;
}

const emits = defineEmits<CommonProgressEmits>();

const onChange = (e: any) => {
  const target = e.target as HTMLProgressElement;
  console.log(target.value);
  emits("update:modelValue", target.value);
};
</script>

<template>
  <progress id="progress" class="cursor-pointer progess" @progress="onChange" />
</template>

<style lang="scss" scoped>
progress {
  -webkit-appearance: none;
  width: 100%;
  height: clamp(1rem, 2vw, 1.5rem);
}
::-webkit-progress-bar {
  background-color: #fff;
}
::-moz-progress-bar {
  background-color: #0f9625;
}
</style>
