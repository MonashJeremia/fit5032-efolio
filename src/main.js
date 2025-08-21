import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// import './style.css'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App);
app.use(PrimeVue, { 
    theme: {
        preset: Aura
    }
     });

app.mount('#app')
