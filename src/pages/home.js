import tabs from '../tabs'
import content from "../content";
import SectionBuilder from "../components/section";
import ImageTextSectionBuilder from '../components/imageTextSection';

const createContent = function () {
    //const content = document.querySelector('#content');
    //content.append(container);

    const sectionBuilder = new SectionBuilder();
    const imageSectionBuilder = new ImageTextSectionBuilder();

    const container = content.createContainer('home');
    const homeBg = imageSectionBuilder.addBackgroundImage('pizza').addClassList(['home-page']).build().getSection();
    const homeSection = sectionBuilder.addBackgroundColor('#f1e8e6').addClassList(['section', 'static', 'home']).build().getSection();
    const footer = content.createFooter('#f1e8e6');

    container.appendChild(homeBg);
    container.appendChild(homeSection);
    container.appendChild(footer[0]);
    container.appendChild(footer[1]);

    const main = document.createElement('div');
    main.id = 'main';
    
    // Create the text on the first page
    const title = document.createElement('h1');
    title.textContent = 'L’ARTE DELLA PIZZA';
    
    const subtitle = document.createElement('h2');
    const subtitle2 = document.createElement('h2');
    subtitle.textContent = `Join us for your next meal today!`;
    subtitle2.textContent =  `You won't regret it!`;

    // Create the content for the delivery section
    const deliveryTitle = document.createElement('h2');
    deliveryTitle.id = 'delivery-title';
    deliveryTitle.textContent = 'Order delivery';
    const uberPNG = 'https://play-lh.googleusercontent.com/MMBG4AZmpMhSfhF5k7QnFmhvFbaF5ZC_BtEOIKRt9TIkUZjul2lWwPZV75PwTfoSm23-jgMxkroRGA-vkDg=s180-rw';
    const woltPNG = 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Wolt-app-icon-2019.png';
    const uberButton = content.createImageButton('home', uberPNG, uberListener);
    const woltButton = content.createImageButton('home', woltPNG, woltListener);
    
    const deliveryButtons = document.createElement('div');
    deliveryButtons.classList.add('buttons-container');

    deliveryButtons.appendChild(uberButton);
    deliveryButtons.appendChild(woltButton);
    
    homeSection.appendChild(deliveryTitle);
    homeSection.appendChild(deliveryButtons);


    // Add the conetnt to the container
    main.appendChild(title);
    main.appendChild(subtitle);
    main.appendChild(subtitle2);

    homeBg.appendChild(main);
    
    return container;

    //content.appendChild(main);

}

const uberListener = function(e){
    window.location.href = "https://www.ubereats.com/l'arte-della-pizza";
}
const woltListener = function(e){
    window.location.href = "https://www.wolt.com/l'arte-della-pizza";
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