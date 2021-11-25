import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import uiVant from './ui/ui-vant';
import '@/stylus/van-root.less';

import './vconfig';
import i18n from './i18n';

// import { Toast } from 'vant';

const baseArr = [router, store, i18n, ...uiVant];

const appInstance = createApp(App);

// appInstance.config.globalProperties.$Toast = Toast;

baseArr.forEach(item => {
  appInstance.use(item);
});

appInstance.mount('#app');
