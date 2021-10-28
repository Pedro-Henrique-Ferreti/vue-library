import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

import GlobalComponents from './plugins/globalComponents.js';

const appInstance = createApp(App);

appInstance.use(GlobalComponents);
appInstance.use(router);
appInstance.mount('#app');
