<template>
  <button :class="[_style, style]" @click="onClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import {computed, useCssModule} from 'vue';

type ButtonProps = {
  onClick?: () => void;
  wide?: boolean;
  style?: string;
};

const {wide} = defineProps<ButtonProps>();
const $style = useCssModule();

const _style = computed<string>(
  () => `${$style.root} ${wide ? $style.wide : ''}`,
);
</script>

<style module>
.root {
  background-color: var(--primary-color);
  border-radius: var(--spacing-small);
  padding: var(--spacing-small);
  border: none;
  color: var(--light-text-color-2);
  font-weight: bold;
  font-size: var(--font-size-medium);
  cursor: pointer;
  transition: opacity var(--animate-fast) linear;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.root:active {
  opacity: 0.75;
}

.root:disabled {
  opacity: 0.5;
  cursor: default;
}

.wide {
  width: 100%;
}
</style>
