<template>
  <input
    :class="_style"
    @input="
      $emit('update:modelValue', ($event?.target as HTMLInputElement)?.value)
    "
    :value="modelValue" />
</template>

<script setup lang="ts">
import {computed, useCssModule, defineEmits} from 'vue';

type InputProps = {
  wide?: boolean;
  style?: string;
  modelValue?: string;
};

const {wide} = defineProps<InputProps>();
defineEmits(['update:modelValue']);
const $style = useCssModule();

const _style = computed<string>(
  () => `${$style.root} ${wide ? $style.wide : ''} ${wide ? $style.wide : ''}`,
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

.error {
  border: 1px solid var(--error-color);
  color: var(--error-color);
}

.root::placeholder {
  color: var(--primary-color);
  opacity: 0.8;
}

.wide {
  width: 100%;
}
</style>
