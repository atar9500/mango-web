import {createApp} from 'vue';
import './style.css';

import App, {router} from '~/app';

createApp(App).use(router).mount('#app');
