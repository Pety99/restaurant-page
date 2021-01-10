import tabs from '../tabs'
import content from "../content";

const createContent = function () {
    //const content = document.querySelector('#content');
    //content.append(container);

    const container = content.createContainer('home');
    const homeBg = content.createImage('pizza');
    homeBg.classList.add('home-page')
    const footer = content.createFooter();

    container.appendChild(homeBg);
    container.appendChild(footer);

    const main = document.createElement('div');
    main.id = 'main';
    
    const title = document.createElement('h1');
    title.textContent = 'L’ARTE DELLA PIZZA';
    
    const subtitle = document.createElement('h2');
    const subtitle2 = document.createElement('h2');
    subtitle.textContent = `Join us for your next meal today!`;
    subtitle2.textContent =  `You won't regret it!`;

    main.appendChild(title);
    main.appendChild(subtitle);
    main.appendChild(subtitle2);

    homeBg.appendChild(main);
    
    return container;



    //content.appendChild(main);
    
}

//Globally adds styles to the pages
const addStyle = function () {
    
    const body = document.body;

    const content = document.querySelector('#content');
    content.classList.add('invisible-scrollbar')
    const panel = document.querySelector('sl-tab-panel')
    //panel.classList.add('max-height-panel');
    
    const title = document.querySelector('h1');
    const subtitles = Array.from(document.querySelectorAll('h2'));
    const main = document.querySelector('#main');
    main.classList.add('flex-table');

    title.classList.add('title');
    subtitles.forEach(subtitle => {
        subtitle.classList.add('subtitle');
    });

    const colors = document.createElement('sl-theme');
    colors.name = 'custom-colors';
    body.appendChild(colors);
    
    
}

const loadPage = function () {
    const home = createContent();
    tabs.addTabPanel('Home', home);
    addStyle();   
}

export default {loadPage};