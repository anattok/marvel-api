import App from './components/App/App';



//ПОМЕТКА: самовызывающаяся функция, пишется в круглых скобках, в конце ставятся круглые скобки
(async () => {
    await App.render()
})();


