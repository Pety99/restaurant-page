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

const createSection = function(id, title, text) {
    const section = document.createElement('section');
    section.classList.add('section', 'static');
    if(id){
        section.id = id;
    }
    if(title){
        const h1 = document.createElement('h1');
        h1.textContent = title;
        section.appendChild(h1);
    }
    if(text) {
        const p = document.createElement('p');
        p.textContent = text;
        section.appendChild(p);
    }
    return section;
}


const createImage = function(backgorundID, title, link) {
    const section = document.createElement('section');
    section.classList.add('section', 'parallax', `${backgorundID}`, 'bg');
    if(title){
        const h1 = document.createElement('h1');
        h1.textContent = title;
        section.appendChild(h1);
    }
    if(link){
        section.setAttribute('data-link', `${link}`);
    }
    return section;
}

const createFooter = function(){
    const footer = document.createElement('section');
    footer.classList.add('footer');

    const icon = document.createElement('sl-icon-button');
    icon.name = 'github';
    icon.label = 'GitHub';
    icon.classList.add('custom-icon');
    icon.onclick = () => {
        location.href = 'https://github.com/Pety99';
    }

    const name = document.createElement('p');
    name.textContent = 'Created by Peter Abordan';

    footer.appendChild(icon);
    footer.appendChild(name);

    return footer
}

const addContentToContainer = function(content, container){
    container.appendChild(content);
} 

export default {
    createContainer,
    createSection,
    createImage,
    createFooter,
}