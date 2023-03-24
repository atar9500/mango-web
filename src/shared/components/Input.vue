<template>
  <input :class="_style" />
</template>

<script setup lang="ts">
import {computed, useCssModule} from 'vue';

type ButtonProps = {
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
  background-color: transparent;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  color: var(--primary-color);
  font-size: var(--font-size-medium);
  padding: var(--spacing-small);
  box-sizing: border-box;
  outline: none;
}

.root::placeholder {
  color: var(--primary-color);
  opacity: 0.8;
}

.wide {
  width: 100%;
}
</style>
