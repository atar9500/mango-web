<template>
  <div :class="$style.root">
    <Logo />
    <div :class="$style.options">
      <Input :class="$style.field" v-model="email" placeholder="Email" wide />
      <Button :class="$style.continue" wide>Sign Up</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

import Button from '~/shared/components/Button.vue';
import Input from '~/shared/components/Input.vue';
import Logo from './Logo.vue';

const email = ref('');
</script>

<style module>
.root {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 32px;
}

.field {
  margin: 0 0 var(--spacing-small) 0;
}

.continue {
  margin: var(--spacing-large) 0 0 0;
}

.options {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.signUp {
  margin: 0 0 12px 0;
}
</style>
