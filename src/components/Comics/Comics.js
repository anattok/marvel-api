import { API_URL, URL_CHARACTERS, URL_COMICS } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';

import { ROOT__INDEX } from '../../constants/root';

import classes from './Comics.css';


class Comics {
    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);

        let htmlComtent = '';

        data.forEach(({ id, title, thumbnail: { path, extension } }) => {

            if (path.lastIndexOf('image_not_available') === -1) {
                const uri = API_URL + URL_COMICS + '/'+ id + '/' + URL_CHARACTERS;
                const imgSrc = path + '/' + 'portrait_incredible' + '.' + extension;

                htmlComtent += `
                <li class="comics__item ${classes.comics__item}" data-uri="${uri}">
                    <span class="${classes.comics__title}">${title}</span>
                    <img class="img-contain ${classes.comics__img}" src="${imgSrc}"/>
                </li>
            `;
            }

        })

        const htmlWrapper = `
        <ul class="${classes.comics__wrapper}">
            ${htmlComtent}
        </ul>
        
        `;

        ROOT__INDEX.innerHTML = htmlWrapper;
    }

    eventListener(){
        document.querySelectorAll('.comics__item').forEach(element =>{
            const uri = element.getAttribute('data-uri');

            element.addEventListener('click', ()=>{
                console.log(uri);
            })
        })
    }
}

export default new Comics();