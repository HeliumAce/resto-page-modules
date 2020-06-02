import { loadSite } from './loader'
import { displayAbout } from './about'
import { displayMenu } from './menu'
import { displayContact } from './contact'

loadSite();
displayAbout();

const addTabLogic = () => {
    const tabs = document.getElementById('nav');
    const currentNav = tabs.getElementsByTagName('button');
    for (let i = 0; i < currentNav.length; i++) {
        currentNav[i].setAttribute('class', 'tab');
        currentNav[i].addEventListener('click', (e) => {
            switchTab(i);
        });
    };

}

const switchTab = (i) => {
    //console.log(i);
    switch (i) {
        case 0:
            displayAbout();
            break;
        case 1:
            displayMenu();
            break;
        case 2:
            displayContact();
            break;
    }
};

addTabLogic();