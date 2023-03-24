import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';

window.Pusher = Pusher;

console.log(import.meta.env.VITE_WEBSOCKETS_PORT);

// const token = localStorage.getItem('token');
const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWYxNTkyMS01MmY0LTQ3ZGMtOTg1Yi1kNTBlY2Y3Y2RkY2MiLCJqdGkiOiJiNGUzNzlhNTJlMDY2N2ZkNjY1ODZhMGIwOTJmOTg3MzlhMmMxYTQ1MGU4NGVkZTAzMTYxNjVhMGUyNWNmYmJlMjhhNmYyZTkzNmIxZTRiZiIsImlhdCI6MTY3OTY0ODQxNS43ODE0MTIsIm5iZiI6MTY3OTY0ODQxNS43ODE0MTQsImV4cCI6MTY3OTY1MjAxNS41MjIxOTMsInN1YiI6Ijk4YmY4NTM3LTdlYTItNDMwOS1iZTU5LTM5ZWYzMDUzMWNlYyIsInNjb3BlcyI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJwaG9uZSIsIm9ubGluZV9hY2Nlc3MiXX0.lq1rE5tlFJhorkQp3N8NJFyL--zJONyxMwE0h0XhH4vcNg2lRHmIHCNl-ltaercah10vo4h9amOD6hBw4b4jmNei8RyhoFzr1F2n8cp0MR-HDAoWhVpkPRTXUqYHuSACB7oXyqNE0B5DErAka42UVBPtOpCmefEXL-_NHulqgFz8BI8_P9WkskURRft8svtO8KKiDkoBIq702eFIr5x_QQLcwoDpuZpPo6OfGkdW4GZeXoSpFKh37WgcMOJL9CvU6_M_zq61F49MDxRFXFPc9nZEADlhtB63cxmCbbRh6pKjaNyODR91heWr_WfYlKKPTyrbPW3Yq57cROKCSnJVvA';

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
