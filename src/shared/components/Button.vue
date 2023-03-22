<template>
  <button :class="[$style.root, style]" @click="onClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
type ButtonProps = {
  onClick?: () => void;
  style?: string;
};

defineProps<ButtonProps>();
</script>

<style module>
.root {
  background-color: transparent;
  border-radius: 8px;
  padding: 4px 8px;
  border: 1px solid #b20d30;
  color: #b20d30;
  cursor: pointer;
}
</style>
