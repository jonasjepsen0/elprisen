import {router} from './controller/router.ts';
import './style/global.scss';

navigator.serviceWorker.register('/sw.js');

router();