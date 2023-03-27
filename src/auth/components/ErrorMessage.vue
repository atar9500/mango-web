<template>
  <span :class="$style.root"><slot></slot></span>
</template>

<script setup lang="ts"></script>

<style module>
.root {
  color: var(--error-color);
  font-size: var(--font-size-xsmall);
  min-height: 18px;
}
</style>
