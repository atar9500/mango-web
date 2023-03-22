<template>
  <div :class="$style.root">
    <h1>Sign Up</h1>
    <div :class="$style.options">
      <Button :style="`${$style.signUp} ${$style.button}`">Sign Up</Button>
      <Button :style="$style.button">Log In</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '~/shared/components/Button.vue';
</script>

<style module>
.root {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 32px;
}

.options {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.button {
  width: 100%;
}

.signUp {
  margin: 0 0 12px 0;
}
</style>
