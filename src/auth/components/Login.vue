<template>
  <div :class="$style.root">
    <Logo />
    <div :class="$style.options">
      <form @submit.prevent="submitForm">
        <text-input
          :class="$style.field"
          v-model="email"
          type="email"
          placeholder="Email"
          wide />
        <text-input
          :class="$style.field"
          v-model="password"
          type="password"
          placeholder="Password"
          wide />
        <Button
          type="submit"
          :disabled="hasErrors"
          :class="$style.continue"
          wide
          >Log In</Button
        >
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
import {toFormValidator} from '@vee-validate/zod';
import * as zod from 'zod';

import Button from '~/shared/components/Button.vue';
import TextInput from '~/shared/components/TextInput.vue';

import Logo from './Logo.vue';
import {useForm} from 'vee-validate';

const validationSchema = toFormValidator(
  zod.object({
    email: zod.string().nonempty().email(),
    password: zod.string().nonempty().max(16).min(8),
  }),
);

const {errors, handleSubmit, validate, useFieldModel} = useForm({
  validationSchema,
});

const submitForm = handleSubmit(async () => {
  await validate();
  if (Object.keys(errors.value).length === 0) {
    // router.push({name: 'Login'});
  }
});

const hasErrors = computed(() => !!Object.keys(errors.value).length);

const [email, password] = useFieldModel(['email', 'password']);
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
