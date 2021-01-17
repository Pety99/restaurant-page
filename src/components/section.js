export class Section {
  constructor(){
        this.wave = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="#f1e8e6" fill-opacity="1" d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,74.7C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>';
        this.section = document.createElement('section');
    }

    addTitle(title) {
        const titleElement = document.createElement('h1');
        titleElement.textContent = title;
        this.section.appendChild(titleElement);
    }

    
    addBackgroundImage(cssClass) {
        this.section.classList.add(cssClass);
    }

    addBackgroundColor(color) {
        this.section.style.backgroundColor = color;
    }

    addWave() {
        const container = document.createElement('div');
        container.classList.add(...['static', 'wave-container']);
        container.innerHTML = this.wave;
        this.section.classList.add('bottom');
        this.section.appendChild(container);
    }

    addClassList(list) {
        list.forEach(cls => {
            this.section.classList.add(cls);
        });
    }

    getSection() {
        return this.section;
    }
}

export default class SectionBuilder {

    constructor() {
        this.section = new Section();
    }

    addTitle(title) {
        this.section.addTitle(title);
        return this;
    }

    addBackgroundImage(cssClass) {
        this.section.addBackgroundImage(cssClass);
        return this;
    }
    addBackgroundColor(color) {
        this.section.addBackgroundColor(color);
        return this;
    }

    addWave() {
        this.section.addWave();
        return this;
    }
    addClassList(list){
        this.section.addClassList(list);
        return this;
    }

    build() {
        const section = this.section;
        this.reset();
        return section;
    }

    reset() {
        this.section = new Section();
    }
}

