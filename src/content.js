import { SlButtonGroup } from "@shoelace-style/shoelace";
import SectionBuilder from './components/section';

/**
 * uses pageName-container as id so that every container can be distinguished.
 * @param {String} pageName 
 */
const createContainer = function (pageName) {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    container.id = `${pageName}-container`;
    content.appendChild(container);
    return container;
}

const createFooter = function(AboveSectionColor){

    const sectionBuilder = new SectionBuilder();
    const footerTopWave = sectionBuilder.addBackgroundColor('#543c52').addWave().build().getSection();
    footerTopWave.classList.add('footerWave');
    

    const footer = sectionBuilder.addBackgroundColor('#543c52').build().getSection();
    footer.classList.add('footer');

    const icon = document.createElement('sl-icon-button');
    icon.name = 'github';
    icon.label = 'GitHub';
    icon.classList.add('custom-icon');
    icon.onclick = () => {
        location.href = 'https://github.com/Pety99';
    }

    const name = document.createElement('h2');
    name.textContent = 'Created by Peter Abordan';

    const copyright = document.createElement('p');
    copyright.textContent = `L'Arte Della Pizza © ${new Date().getFullYear()} | All Rights Reserved`;

    footer.appendChild(icon);
    footer.appendChild(name);
    footer.appendChild(copyright);

    return [footerTopWave, footer];
}

const createImageButton = function(page, file, listener){
    const button = document.createElement('button');
    button.onclick = listener;
    button.classList.add(`${page}`);
    button.style.backgroundImage = `url(${file})`;
    return button;
}

export default {
    createContainer,
    createFooter,
    createImageButton
}