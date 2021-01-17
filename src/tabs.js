const createTab = function(group, name){
    const tab = document.createElement('sl-tab');
    tab.slot = 'nav';
    tab.panel = name;
    tab.textContent = name;
    group.appendChild(tab);
}

const styleTabs = function(){
    const tabGorup = document.querySelector('sl-tab-group');
    tabGorup.classList.add('custom-tab-group');
    const tabs = document.querySelectorAll('sl-tab');
    tabs.forEach(tab => {
        tab.classList.add('custom-tab');    
    });

    const mediaQuery = window.matchMedia('(min-width: 768px)')
    screenResize(mediaQuery);
    mediaQuery.addListener(screenResize)
}

function screenResize(e) {
    const tabGorup = document.querySelector('sl-tab-group');
    if(e.matches){
        tabGorup.placement = 'top';
    }
    else{
        tabGorup.placement = 'left'; 
    }
}

const createTabs = function(names){
    const content = document.querySelector('#content');
    const tabGroup = document.createElement('sl-tab-group');
    content.appendChild(tabGroup);

    names.forEach(name => {
        createTab(tabGroup, name);
    });
    
    //Changes the default color of the tabs to a custom color
    styleTabs();
}
/**
 * Adds a panel to the tab group, the panel should contain the content for the page
 * @param {string} name the name of the panel and the tab must be the same
 * @param {htmlElement} div the div containing the contnet of the page
 */
const addTabPanel = function(name, div){
    const group = document.querySelector('sl-tab-group');
    const panel = document.createElement('sl-tab-panel');

    stylePanel(panel);
    panel.name = name;
    panel.appendChild(div);

    group.classList.add('center-panel');
    group.appendChild(panel);
}

const stylePanel = function(panel){
    panel.classList.add('wrapper');
    panel.classList.add('invisible-scrollbar');
    panel.classList.add('custom-tab-panel');
    panel.classList.add('custom-tab-group-scroll');
    changeTabBackgorundOnScroll(panel);
}

/**
 * changes the background of the tabs to make them visible when scrolled
 * @param {htmlElement} panel should be 'sl-tab-panel'
 */
const changeTabBackgorundOnScroll = function(panel){
    const tabs = document.querySelector('sl-tab-group');
    const titles = Array.from(document.querySelectorAll('.wave-container > h1'));
    panel.onscroll = () =>{
        if(panel.scrollTop <= 10){  // Scroll is close to the top
            tabs.classList.remove('custom-tab-group-scroll');
            titles.forEach(title => {
                title.classList.add('center-animation');
            });
        } 
        else if(!Array.from(tabs.classList).includes('custom-tab-group-scroll')){
            tabs.classList.add('custom-tab-group-scroll');
            titles.forEach(title => {
                title.classList.remove('center-animation');
            });
        }
    }
}

export default {createTabs, addTabPanel};

