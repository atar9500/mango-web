import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App, {router} from '~/app';

import './style.css';

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
