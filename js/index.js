import  {delay, logger} from './task1.js';
import {toggleUserState, logger2, users} from './task2.js';
import {makeTransaction, logSuccess, logError} from './task3.js';

const clickHendler = (e) => {
    if (e.target.nodeName !== 'BUTTON'){
        return;
    }
    const btn = e.target;
    switch (btn.dataset.action){
        case 'start1':
            delay(2000).then(logger); // Resolved after 2000ms
            delay(1000).then(logger); // Resolved after 1000ms
            delay(1500).then(logger); // Resolved after 1500ms
            break;

        case 'start2':
            toggleUserState(users, 'Mango').then(logger2);
            toggleUserState(users, 'Lux').then(logger2);
            break;

        case 'start3':
            makeTransaction({ id: 70, amount: 150 })
                .then(logSuccess)
                .catch(logError);

            makeTransaction({ id: 71, amount: 230 })
                .then(logSuccess)
                .catch(logError);

            makeTransaction({ id: 72, amount: 75 })
                .then(logSuccess)
                .catch(logError);

            makeTransaction({ id: 73, amount: 100 })
                .then(logSuccess)
                .catch(logError);
            break;
    }
}
document.querySelector('main').addEventListener('click', clickHendler);
