<template>
  <div :class="$style.root">
    <Logo />
    <form :class="$style.form" @submit.prevent="submitForm">
      <TextInput
        v-model="email.value.value"
        name="email"
        type="email"
        placeholder="Email"
        wide />
      <ErrorMessage :class="$style.error">
        {{ errors.email }}
      </ErrorMessage>
      <TextInput
        v-model="firstName.value.value"
        name="firstName"
        placeholder="First Name"
        wide />
      <ErrorMessage :class="$style.error">
        {{ errors.firstName }}
      </ErrorMessage>
      <TextInput
        v-model="lastName.value.value"
        name="lastName"
        placeholder="Last Name"
        wide />
      <ErrorMessage :class="$style.error">
        {{ errors.lastName }}
      </ErrorMessage>
      <Button :class="$style.button" type="submit" wide>Sign Up</Button>
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

const REGEX_NAME =
  /[^0-9-\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]+$/;

const validationSchema = toFormValidator(
  zod.object({
    email: zod.string().nonempty().email(),
    firstName: zod.string().nonempty().regex(REGEX_NAME),
    lastName: zod.string().nonempty().regex(REGEX_NAME),
  }),
);

const {errors, handleSubmit} = useForm({validationSchema});

const submitForm = handleSubmit(async () => {
  router.push({name: 'Login'});
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

.form {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
