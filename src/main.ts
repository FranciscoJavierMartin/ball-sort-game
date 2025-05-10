import '@/assets/styles.css';
import { createApp } from 'vue';
import router from '@/router';
import i18n from '@/i18n';
import App from '@/app.vue';

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');
