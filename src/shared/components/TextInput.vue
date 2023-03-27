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
  error?: boolean;
  modelValue?: string;
};

const {wide, error} = defineProps<InputProps>();
defineEmits(['update:modelValue']);
const $style = useCssModule();

const _style = computed<string>(() => {
  let value = $style.root;
  if (wide) {
    value += ` ${$style.wide}`;
  }
  if (error) {
    value += ` ${$style.error}`;
  }
  return value;
});
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
  opacity: 0.8;
  transition: opacity var(--animate-fast) linear,
    border var(--animate-fast) linear;
}

.error {
  border: 1px solid var(--error-color);
  color: var(--error-color);
}

.root:focus {
  opacity: 1;
}

.root::placeholder {
  color: inherit;
  opacity: 0.8;
}

.wide {
  width: 100%;
}
</style>
