import {defineStore} from 'pinia';
import {ref} from 'vue';

import * as api from '../utils/api';
import useAsyncStore from '../hooks/useAsyncAction';

type LoginArgs = {
  email: string;
  password: string;
};

type LoginResponse = {
  challenge?: string;
};

type SignUpArgs = {
  email: string;
  firstName: string;
  lastName: string;
};

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref<string>();
  const idToken = ref<string>();
  const refreshToken = ref<string>();
  const challenge = ref<string>();

  const login = useAsyncStore<LoginArgs>('login', async function (data) {
    const response = await api.post<LoginResponse>('auth/login', {data});
    accessToken.value = response.headers['Access-Token'];
    idToken.value = response.headers['Id-Token'];
    refreshToken.value = response.headers['Refresh-Token'];
    challenge.value = response.data.challenge;
  });

  const signUp = useAsyncStore<SignUpArgs>('signUp', async function (data) {
    await api.post<LoginResponse>('auth/login', {data});
  });

  const confirmSignUp = useAsyncStore<LoginArgs>(
    'confirmSignUp',
    async function (data) {
      const response = await api.post('auth/login', {
        data: {...data, challenge: challenge.value},
      });
      accessToken.value = response.headers['Access-Token'];
      idToken.value = response.headers['Id-Token'];
      refreshToken.value = response.headers['Refresh-Token'];
    },
  );

  return {accessToken, idToken, refreshToken, login, signUp, confirmSignUp};
});
