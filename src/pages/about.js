import tabs from '../tabs'
import content from "../content";
import TextSectionBuilder from '../components/textSection';
import ImageTextSectionBuilder from '../components/imageTextSection'

const createContent = function () {
    const sectionBuilder = new TextSectionBuilder();
    const imageTextSectionBuilder = new ImageTextSectionBuilder();

    const container = content.createContainer('about');
    const section1 = sectionBuilder.addBackgroundColor('#dcc3c3').addClassList(['section', 'static']).addTitle('The Neapolitan Story').addText(`Napoli, 18th century – pizza was born. Traditional dough masters laid the foundation for the recipe of the authentic Neapolitan pizza we know today. A fluffy crust made fresh with the simplest of ingredients on top. With L’Arte, a new generation of dough masters rose. And we think rules are meant to be broken. That is why we added bakery science and modern techniques to create a new generation of Neapolitan pizza.`).addText(`Our dough lets the fermentation do the work – it rises for 50 hours before it’s shoved into the handmade Fazzone pizza oven for 80 seconds. The crust – fluffy, not crunchy - rises high while the heat forms its characteristic dark spots. Topped with the best seasonal ingredients, we see our pizza as a well-balanced dish. A perfect composition of flavors. Subbing ingredients will throw it off balance, so our chef will not allow it. He can, however, help you decide on what pizza fits your liking. Remember: cut your pizza with the scissors to help keep the fluffy crust alive.`).build().getSection();
    const section2 = sectionBuilder.addBackgroundColor('#f1e8e6').addClassList(['section', 'static']).addTitle('Sustainability').addText(`We use local products whenever we can. Even our amazing burrata is made local, which saves transportation and – god forbid – freezing. Our ingredients are valuable to us. We never waste food and run our stock while it lasts.`).addText(`Pizza is science - During closing times, we love experimenting with dough. We believe in constant innovation and therefore, our dough can be slightly different the next time you visit.`).build().getSection();

    const topSection = imageTextSectionBuilder.addBackgroundImage('bg4').addClassList(['about']).addTitle('About\r\nUs').addTextBox('L’Arte Della Pizza is the New Neapolis', 'A place where true Neapolitan tradition combines with the vision of the new generation. Our pizza is a mix of passion and bakery science. Inspired by the scientific elements, we created our own. You can spot several of these icons at L’Arte. Watch closely and they tell you the story about the origins of Napels and the mythical siren Partenope. Following the path of the song Odissea from La Famiglia, telling old stories by using a new language – rap music. Just like L’Arte does with the pizza.').justify('center').align('bottom').addWave().build();
    const middleSection = imageTextSectionBuilder.addBackgroundImage('bg5').addTitle('Our\r\nJourney').addTextBox('Culture', 'L’Arte Della Pizza was founded in 2019 with the opening of L’Arte Della Pizza on the Bilderdijkstraat in Amsterdam. Centuries-old Neapolitan cuisine is brought back to modern times by reinventing the authentic recipes with new techniques and top-notch ingredients.').justify('left').align('top').addWave().build();
    const footer = content.createFooter('#dcc3c3');

    container.appendChild(topSection.getSection());
    container.appendChild(section1);
    container.appendChild(middleSection.getSection());
    container.appendChild(section2);
    container.appendChild(footer[0]);
    container.appendChild(footer[1]);
    
    return container;
}




const addStyle = function () {
}

const loadPage = function () {
    const about = createContent();
    tabs.addTabPanel('About', about);
    addStyle();   
}

export default {loadPage};