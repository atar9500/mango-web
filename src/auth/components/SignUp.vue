<template>
  <div :class="$style.root">
    <Logo />
    <div :class="$style.options">
      <form @submit.prevent="submitForm">
        <text-input
          :class="$style.field"
          v-model="email"
          name="email"
          placeholder="Email"
          :error="!!errors.email"
          wide />
        <Button
          :disabled="hasErrors"
          :class="$style.continue"
          type="submit"
          wide
          >Sign Up
        </Button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {useForm} from 'vee-validate';
import {useRouter} from 'vue-router';
import {toFormValidator} from '@vee-validate/zod';
import * as zod from 'zod';

import Button from '~/shared/components/Button.vue';
import TextInput from '~/shared/components/TextInput.vue';
import Logo from './Logo.vue';

const router = useRouter();

const validationSchema = toFormValidator(
  zod.object({
    email: zod.string().nonempty().email(),
  }),
);

const {errors, handleSubmit, validate, useFieldModel} = useForm({
  validationSchema,
});

const hasErrors = computed(() => !!Object.keys(errors.value).length);

const submitForm = handleSubmit(async () => {
  await validate();
  if (Object.keys(errors.value).length === 0) {
    router.push({name: 'Login'});
  }
});

const email = useFieldModel('email');
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
</style>
