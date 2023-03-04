import App from './components/App';
import Comics from './components/Comics';

//ПОМЕТКА: самовызывающаяся функция, пишется в круглых скобках, в конце ставятся круглые скобки
(async () => {
    await App.render();
    Comics.eventListener();
})();


