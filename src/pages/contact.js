import tabs from '../tabs'
import content from "../content";
import SectionBuilder from '../components/textSection';
import ImageTextSectionBuilder from '../components/imageTextSection'
import { Loader } from "@googlemaps/js-api-loader"

const createContent = function () {
    const container = content.createContainer('contact');
    const sectionBuilder = new SectionBuilder();
    const imageTextSectionBuilder = new ImageTextSectionBuilder();  
    
    const topImage = imageTextSectionBuilder.addBackgroundImage('bg6').addTitle('Contact Us').build().getSection();
    
    const map = sectionBuilder.addBackgroundColor('#f1e8e6').addClassList(['section', 'static', 'map']).build().getSection();
    const mapdiv = document.createElement('div');
    mapdiv.id = 'map';
    mapdiv.style += "display:inline-block; overflow:hidden;";
    mapdiv.innerHTML = '<iframe frameborder="0" style="position:relative; top:-50px; z-index:2; border:none;" src="https://www.google.com/maps/d/u/0/embed?mid=1KP2-pwMfJ8rYDDVUSpUYcRFy9ZlyKiTM&amp;z=15" width="100%" height="100%"></iframe>';
    map.appendChild(mapdiv);
    
    const open =  sectionBuilder.addBackgroundColor('#f1e8e6').addClassList(['section', 'static', 'contact']).build().getSection();
    const location = createContact('Location', ['12 Király Street', '1054, Budapest, Hungary']);
    const hours = createContact('Hours', ['Tue – Thu, 8 am – 10 pm', 'Fri – Sun, 8 am – 11 pm'], 'Closed Mondays');
    const contact = createContact('Contact', ['(512) 555-0110', 'LarteDellaPizza@gmail.com']);
    open.appendChild(location);
    open.appendChild(hours);
    open.appendChild(contact);

    const footer = content.createFooter('#f1e8e6');
    container.appendChild(topImage);
    container.appendChild(map);
    container.appendChild(open);
    container.appendChild(footer[0]);
    container.appendChild(footer[1]);
    return container;
}

const addStyle = function () {
}

const createContact = function(title, lines, aside){
    const div = document.createElement('div');
    div.classList.add('info');
    const h1 = document.createElement('h1');
    h1.textContent = title;
    div.appendChild(h1);

    lines.forEach(line => {
        const p = document.createElement('p');
        p.textContent = line;
        div.appendChild(p);
    });
    
    if(aside){
        const p = document.createElement('p');
        p.textContent = aside;
        p.classList.add('aside');
        div.appendChild(p);
    }
    return div;
}

const loadPage = function () {
    const contact = createContent();
    tabs.addTabPanel('Contact', contact);
    addStyle();   
}

export default {loadPage};