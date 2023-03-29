import {defineStore} from 'pinia';
import {ref} from 'vue';

type AsyncError = {
  message: string;
};

const useAsyncStore = <D = void, R = void>(
  name: string,
  process: (params: D) => Promise<R>,
) =>
  defineStore(name, () => {
    const loading = ref(false);
    const loaded = ref(false);
    const data = ref<R>();
    const error = ref<string>();

    async function execute(params: D) {
      try {
        loading.value = true;
        data.value = await process(params);
      } catch (e) {
        loading.value = false;
        loaded.value = true;
        error.value = (e as AsyncError).message;
        throw error;
      }
      loading.value = false;
      loaded.value = true;
    }

    return {loading, loaded, data, error, execute};
  })();

export default useAsyncStore;
