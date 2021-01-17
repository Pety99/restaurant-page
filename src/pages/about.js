import tabs from '../tabs'
import content from "../content";
import SectionBuilder from '../components/section';
import ImageTextSectionBuilder from '../components/imageTextSection'

const createContent = function () {
    const sectionBuilder = new SectionBuilder();

    const container = content.createContainer('about');
    const section1 = sectionBuilder.addBackgroundColor('#dcc3c3').addClassList(['section', 'static', 'about']).build().getSection();
    const section2 = sectionBuilder.addBackgroundColor('#f1e8e6').addClassList(['section', 'static', 'about']).build().getSection();

    const imageTextSectionBuilder = new ImageTextSectionBuilder();
    const topSection = imageTextSectionBuilder.addBackgroundImage('bg4').addTitle('About\r\nUs').addTextBox('Title', 'sdffff sdf sdf sdf sdf sd fsd fs dfsd fsd fsdf sd sdf sdf sdfsdf fdsf sdf sdfsd fsdfsdf sdsd fsdf sdf dsf sdf sdf sdffff sdf sdf sdf sdf sd fsd fs dfsd fsd fsdf sd sdf sdf sdfsdf fdsf sdf sdfsd fsdfsdf sdsd fsdf sdf dsf sdf sdf ').justify('center').align('bottom').addWave().build();
    const middleSection = imageTextSectionBuilder.addBackgroundImage('bg5').addTitle('Our\r\nJourney').addTextBox('Title', 'asasdfd fsadf asdf sd df sd afasdtwer  f g dfh gh a gs f a gf waet dfg sd fgh sdh daf g era  h dh a  ad f sdf  g fdgh df h dfgaew g  h rth  er gerg a  ger gh th  th  etrher g aa er g ere ar ge h tr hs rett rt r twe sdaf').justify('left').align('top').addWave().build();
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