import tabs from './tabs'

const loadBackground = function (filename) {
    const body = document.querySelector('body');
    //body.classList.add('background');
    //body.classList.add('filter');
    //body.style.backgroundImage = `url('/assets/${filename}')`;
}

const loadTabs = function(){
    const tabList = ['Home', 'Menu', 'About', 'Contact'];
    tabs.createTabs(tabList);
}


export default {loadBackground, loadTabs};
