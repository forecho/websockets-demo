import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';

window.Pusher = Pusher;

console.log(import.meta.env.VITE_WEBSOCKETS_PORT);

// const token = localStorage.getItem('token');
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWYxNTkyMS01MmY0LTQ3ZGMtOTg1Yi1kNTBlY2Y3Y2RkY2MiLCJqdGkiOiI1MGZkZDIzZGI4OGQzOTdkMDQ3NWRkNzUwNDIxYWQ2N2EwNjgzNzI0Y2JiNmFiZWQyNWJkZDkxOTc0NTc3ZDlmN2VjNGYyOWNhNzMzYjczMSIsImlhdCI6MTY3OTQ4MzQxNS4yMTA3OTIsIm5iZiI6MTY3OTQ4MzQxNS4yMTA3OTQsImV4cCI6MTY3OTQ4NzAxNC45ODQ0ODMsInN1YiI6Ijk4YmY4NTM3LTdlYTItNDMwOS1iZTU5LTM5ZWYzMDUzMWNlYyIsInNjb3BlcyI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJwaG9uZSIsIm9ubGluZV9hY2Nlc3MiXX0.h37WMUcpSerF45w2BQ8Oy5fN9DJvXRjjksF0G2HasOpI7yXNa24AH69iX28LNGvG8zFQQpAyh_VA-Dt2VILIKoH5mzs-yPqVyVnNjNSmSH2s41GsakbdzIMnIQ0GsHzkK6YYEDOiVD_05agwfY59dRTruzuyWjRKLp5ikhJZ3OfkxUm-WgDNN8Diz2Y_z1NF8p0ik0sJoEr7CmiRU1UymwQAeCQ7LNuZ4H5tE6k2vUZ00yc1_mXflQfBWIGsBa-NMEkUULthPE9OhseJeV3-_4bPmilZ8b7p1X-U5ao38ovDCKFrKsPGZ2kcAIJcysN7yEx8Pq90jPEv4NT2YNyZxg';

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
