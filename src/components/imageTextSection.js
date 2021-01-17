import {Section} from '../components/section'
class ImageTextSection extends Section {
    constructor() {
        super();
        this.topWave = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dcc3c3" fill-opacity="1" d="M0,0L24,0C48,0,96,0,144,0C192,0,240,0,288,48C336,96,384,192,432,229.3C480,267,528,245,576,213.3C624,181,672,139,720,144C768,149,816,203,864,197.3C912,192,960,128,1008,122.7C1056,117,1104,171,1152,192C1200,213,1248,203,1296,165.3C1344,128,1392,64,1416,32L1440,0L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>';
        this.bottomWave = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dcc3c3" fill-opacity="1" d="M0,320L24,320C48,320,96,320,144,293.3C192,267,240,213,288,213.3C336,213,384,267,432,245.3C480,224,528,128,576,106.7C624,85,672,139,720,181.3C768,224,816,256,864,261.3C912,267,960,245,1008,202.7C1056,160,1104,96,1152,101.3C1200,107,1248,181,1296,229.3C1344,277,1392,299,1416,309.3L1440,320L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>';
        this.section = document.createElement('section');
        this.section.classList.add('section', 'parallax', 'bg', 'about');

    }

    addTextBox(title, text) {
        const textBox = document.createElement('div');
        textBox.classList.add(...['static', 'wave-container']);
        if(title){
            const tbTitle = document.createElement('h1');
            tbTitle.textContent = title;
            tbTitle.classList.add('center-animation');
            textBox.appendChild(tbTitle);
        }
        if(text){
            const tbText = document.createElement('p');
            tbText.textContent = text;
            textBox.appendChild(tbText);
        }
        this.section.appendChild(textBox);
    }

    justifyLeft() {
        if (this.section.childNodes[1].classList.contains('wave-container')) {
            const title = this.section.childNodes[0];
            const textBox = this.section.childNodes[1];
            this.section.textContent = '';
            this.section.appendChild(textBox);
            this.section.appendChild(title);
        }
        this.section.classList.remove('right', 'center');
        this.section.classList.add('left');
    }

    justifyCenter() {
        if (this.section.childNodes[0].classList.contains('wave-container')) {
            const title = this.section.childNodes[1];
            const textBox = this.section.childNodes[0];
            this.section.textContent = '';
            this.section.appendChild(title);
            this.section.appendChild(textBox);
        }
        this.section.classList.remove('left', 'right');
        this.section.classList.add('center');
    }

    justifyRight() {
        this.justifyCenter();
        this.section.classList.remove('left', 'center');
        this.section.classList.add('right');
    }

    justify(direction) {
        if (direction == 'left') {
            this.justifyLeft();
        }
        else if (direction == 'center') {
            this.justifyCenter();
        }
        else if (direction == 'right') {
            this.justifyRight();
        }
    }

    align(direction) {
        if (direction == 'top') {
            this.section.classList.remove('bottom', 'full-height');
            this.section.classList.add('top');
        }
        else if (direction == 'center') {
            this.section.classList.remove('bottom', 'top');
            this.section.classList.add('full-height');
        }
        else if (direction == 'bottom') {
            this.section.classList.remove('full-height', 'top');
            this.section.classList.add('bottom');
        }
    }

    // Must be claed after addTextBox
    addWave() {
        const nodes = this.section.childNodes;
        if (this.section.classList.contains('top')) {
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i].classList.contains('wave-container')) {
                    const currentHtml = nodes[i].innerHTML;
                    nodes[i].innerHTML = this.topWave;
                    nodes[i].innerHTML += currentHtml;
                    
                }
            }
        }
        else if (this.section.classList.contains('bottom')) {
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i].classList.contains('wave-container')) {
                    nodes[i].innerHTML += this.bottomWave;
                }
            }

        }
        else if (this.section.classList.contains('full-height')) {
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i].classList.contains('wave-container')) {
                    nodes[i].innerHTML += this.topWave;
                    nodes[i].innerHTML += this.bottomWave;
                }
            }
        }

    }

    getSection() {
        return this.section;
    }

}


export default class ImageTextSectionBuilder {

    constructor() {
        this.ImageTextSection = new ImageTextSection();
    }

    addTitle(title) {
        this.ImageTextSection.addTitle(title);
        return this;
    }

    addTextBox(title, text) {
        this.ImageTextSection.addTextBox(title, text);
        return this;
    }

    addBackgroundImage(cssClass) {
        this.ImageTextSection.addBackgroundImage(cssClass);
        return this;
    }

    addClassList(list){
        this.ImageTextSection.addClassList(list);
        return this;
    }

    justify(direction) {
        this.ImageTextSection.justify(direction);
        return this;
    }
    align(direction) {
        this.ImageTextSection.align(direction);
        return this;
    }

    addWave() {
        this.ImageTextSection.addWave();
        return this;
    }

    build() {
        const section = this.ImageTextSection;
        this.reset();
        return section;
    }

    reset() {
        this.ImageTextSection = new ImageTextSection();
    }
}