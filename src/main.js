import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';

window.Pusher = Pusher;

console.log(import.meta.env.VITE_WEBSOCKETS_PORT);

// const token = localStorage.getItem('token');
const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWYxNTkyMS01MmY0LTQ3ZGMtOTg1Yi1kNTBlY2Y3Y2RkY2MiLCJqdGkiOiJjODVkODc1MzZkYmYxNWNkNmU4M2U4ZDI0NTcyNTJiNGM4YWE2NDYwYzNhMTQ1NmRkNjkwYzVlNmQ2Yzg1ZGMzNDJhNTI2YTVlZWVhYTFmYyIsImlhdCI6MTY3OTU2NTMzNS41Mjc5MjMsIm5iZiI6MTY3OTU2NTMzNS41Mjc5MjUsImV4cCI6MTY3OTU2ODkzNS4yODUzMDIsInN1YiI6Ijk4YmY4NTM3LTdlYTItNDMwOS1iZTU5LTM5ZWYzMDUzMWNlYyIsInNjb3BlcyI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJwaG9uZSIsIm9ubGluZV9hY2Nlc3MiXX0.SR_kvHVxgEljZJ-MhCMCfUVXZs4Q3Hs74lYQKOPrZfUpWObMYnfuvYZQlcsUfnAHlwirlAudphI3WBU27rdvJ0j039XsWI-dN2vm48xV5C2xRJo5_D5dlDV7ysIywb4yZMfb3D0i5rTVUSz-jbezndcSQiOgiKQiV04wnEyLku_trD8QzO0LAHQuGEuAVXDsQcOrcSIuGTRw8nvh_vrU0zmZGlltGUErd1ZnuMC-Z3OqsPYMZ2r3eNByD82FLErBelk_j3GbyTQu-1U9I5Vo8XUB2E4wyMKzcNzQaAWUDWJ0jcZILgFUkDzbmXPu_ePct5MuAf24WTcubLXLMDm1_A';

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_WEBSOCKETS_KEY,
    wsHost: import.meta.env.VITE_WEBSOCKETS_HOST,
    wsPort: import.meta.env.VITE_WEBSOCKETS_PORT,
    wssPort: import.meta.env.VITE_WEBSOCKETS_PORT,
    cluster: import.meta.env.VITE_WEBSOCKETS_CLUSTER,
    authEndpoint: 'http://127.0.0.1:8000/api/broadcasting/auth',
    forceTLS: false,
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
    auth: {
      headers: {
        authorization: 'Bearer ' + token,
      }
    },
   
});

createApp(App).mount('#app')
