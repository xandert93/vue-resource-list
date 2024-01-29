import { createApp } from 'vue';
import App from './App.vue';

import Card from './components/ui/Card.vue';
import Button from './components/ui/Button.vue';
import Dialog from './components/ui/Dialog.vue';

const app = createApp(App);

app.component('Card', Card);
app.component('Button', Button);
app.component('Dialog', Dialog);

app.mount('#app');
