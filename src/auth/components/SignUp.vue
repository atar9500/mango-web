<template>
  <div :class="$style.root">
    <Logo />
    <form :class="$style.options" @submit.prevent="submitForm">
      <text-input
        v-model="email.value.value"
        name="email"
        placeholder="Email"
        :error="!!errors.email"
        wide />
      <error-message :class="$style.error">
        {{ errors.email }}
      </error-message>
      <text-input
        v-model="firstName.value.value"
        name="firstName"
        placeholder="First Name"
        :error="!!errors.firstName"
        wide />
      <error-message :class="$style.error">
        {{ errors.firstName }}
      </error-message>
      <text-input
        v-model="lastName.value.value"
        name="lastName"
        placeholder="Last Name"
        :error="!!errors.lastName"
        wide />
      <error-message :class="$style.error">
        {{ errors.lastName }}
      </error-message>
      <Button :disabled="!meta.valid" :class="$style.button" type="submit" wide
        >Sign Up
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {useForm, useField} from 'vee-validate';
import {useRouter} from 'vue-router';
import {toFormValidator} from '@vee-validate/zod';
import * as zod from 'zod';

import Button from '~/shared/components/Button.vue';
import TextInput from '~/shared/components/TextInput.vue';

import Logo from './Logo.vue';
import ErrorMessage from './ErrorMessage.vue';

const router = useRouter();

const validationSchema = toFormValidator(
  zod.object({
    email: zod.string().nonempty().email(),
    firstName: zod.string().nonempty().regex(/\p{L}/),
    lastName: zod.string().nonempty().regex(/\p{L}/),
  }),
);

const {errors, meta, handleSubmit} = useForm({
  validationSchema,
});

const submitForm = handleSubmit(async () => {
  if (meta.value.valid) {
    router.push({name: 'Login'});
  }
});

const email = useField<string>('email');
const firstName = useField<string>('firstName');
const lastName = useField<string>('lastName');
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

.error {
  margin: 0 0 var(--spacing-small) 0;
  align-self: flex-start;
}

.button {
  margin: var(--spacing-medium) 0 0;
}

.options {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
