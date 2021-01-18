import SectionBuilder, {Section} from './section';
export class TextSection extends Section {
    constructor(){
          super();
          this.wave = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="#f1e8e6" fill-opacity="1" d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,74.7C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>';
          this.section = document.createElement('section');
          this.tittleContainer = document.createElement('div');
          this.textContainer = document.createElement('div');
          this.section.appendChild(this.tittleContainer);
          this.section.appendChild(this.textContainer);
      }
      addTitle(title){
          const h1 = document.createElement('h1');
          h1.textContent = title;
          this.tittleContainer.appendChild(h1);
      }
      addText(text){
          const p = document.createElement('p');
          p.textContent = text;
          this.textContainer.appendChild(p);
      }
}

export default class TextSectionBuilder extends SectionBuilder{
    constructor() {
        super();
        this.section = new TextSection();
    }
    addText(text){
        this.section.addText(text);
        return this;
    }
    reset() {
        this.section = new TextSection();
    }
}