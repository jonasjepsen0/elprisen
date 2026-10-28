import {router} from './controller/router.ts';

navigator.serviceWorker.register('/sw.js');

router();