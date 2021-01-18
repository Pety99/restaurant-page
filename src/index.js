import './style/styles.css';
import './style/tabs.css';
import './style/colors.css';
import './style/pageContent.css'
import './style/menu.css';
import './style/home.css';
import './style/about.css';
import './style/contact.css';
import './style/section.css'
import '/assets/pizza-oil.jpg';
import '@shoelace-style/shoelace/dist/shoelace/shoelace.css';
import { setAssetPath, SlTab, SlTabPanel, SlTabGroup, SlIcon, SlIconButton} from '@shoelace-style/shoelace';
import allPages from './pages';
import homeView from './pages/home';
import menuView from './pages/menu';
import aboutView from './pages/about'
import contactView from './pages/contact'

setAssetPath(document.currentScript.src);
customElements.define('sl-tab', SlTab);
customElements.define('sl-tab-panel', SlTabPanel);
customElements.define('sl-tab-group', SlTabGroup);
customElements.define('sl-icon', SlIcon);
customElements.define('sl-icon-button', SlIconButton);

allPages.loadBackground('pizza-oil.jpg');
allPages.loadTabs();
homeView.loadPage();
menuView.loadPage();
aboutView.loadPage();
contactView.loadPage();
