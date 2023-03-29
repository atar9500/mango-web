<template>
  <input
    :class="_style"
    @input="
      $emit('update:modelValue', ($event?.target as HTMLInputElement)?.value)
    "
    :value="modelValue" />
</template>

<script setup lang="ts">
import {computed, useCssModule} from 'vue';

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
  border: 2px solid var(--light-text-color);
  border-radius: 8px;
  color: var(--text-color);
  font-size: var(--font-size-medium);
  padding: var(--spacing-small);
  box-sizing: border-box;
  outline: none;
  transition: color var(--animate-fast) linear;
}

.error {
  border: 2px solid var(--error-color);
  color: var(--error-color);
}

.root:focus {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.root::placeholder {
  color: inherit;
  opacity: 0.4;
}

.wide {
  width: 100%;
}
</style>
