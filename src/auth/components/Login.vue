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
      <ErrorMessage :class="$style.error">{{ errors.email }}</ErrorMessage>
      <TextInput
        v-model="password.value.value"
        name="password"
        type="password"
        placeholder="Password"
        wide />
      <ErrorMessage :class="$style.error">{{ errors.password }}</ErrorMessage>
      <Button
        type="submit"
        :disabled="store.login.loading"
        :class="$style.login"
        wide
        >Log In
      </Button>
      <Button :on-click="onSignUp" :class="$style.button" wide>Sign Up </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {toFormValidator} from '@vee-validate/zod';
import {useForm, useField} from 'vee-validate';
import * as zod from 'zod';
import {useRouter} from 'vue-router';

import Button from '~/shared/components/Button.vue';
import TextInput from '~/shared/components/TextInput.vue';
import {useAuthStore} from '~/shared/store/useAuthStore';

import Logo from './Logo.vue';
import ErrorMessage from './ErrorMessage.vue';

const store = useAuthStore();

const router = useRouter();

const validationSchema = toFormValidator(
  zod.object({
    email: zod.string().nonempty().email(),
    password: zod.string().nonempty().max(16).min(8),
  }),
);

const {errors, handleSubmit} = useForm({validationSchema});

const submitForm = handleSubmit(async values => store.login.execute(values));

const onSignUp = () => router.push({name: 'SignUp'});

const email = useField<string>('email');
const password = useField<string>('password');
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

.login {
  margin: var(--spacing-medium) 0 var(--spacing-small);
}

.form {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.signUp {
  margin: 0 0 12px 0;
}
</style>
