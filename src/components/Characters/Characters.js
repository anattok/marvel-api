import { ROOT__MODAL } from '../../constants/root';
import { getDataApi } from '../../utils/getDataApi';

import classes from './Characters.css';

class Character {

    renderContent(data) {
        let htmlContent = ' ';

        data.forEach(({ name, thumbnail: { path, extension } }) => {
            const imgSrc = path + '/' + 'portrait_incredible' + '.' + extension;

            htmlContent += `
                <li class="${classes.characters__item}">
                    <img class="img-cover ${classes.characters__img}" src="${imgSrc}">
                    <span class="${classes.characters__name}">${name}</span>
                </li>
            `;
        });

        const htmlWrapper = `
            <div class="${classes.wrapper}">
                <ul class="${classes.characters__container}">
                    ${htmlContent}
                </ul>
                <button class="${classes.characters__close}"
                onclick="modal.innerHTML = '' "
                >Закрыть</button>
            <div>
        `;

        ROOT__MODAL.innerHTML = htmlWrapper;

    }

    renderNotification() {
        console.log("Массив пустой")
    }

    async render(uri) {
        const data = await getDataApi.getData(uri);

        // if(data.length){
        //     this.renderContent();
        // }else{
        //     this.renderNotification();
        // }

        data.length ? this.renderContent(data) : this.renderNotification();
    }
}

export default new Character();