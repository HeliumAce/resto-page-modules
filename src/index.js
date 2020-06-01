import { displayAbout } from './about'
import { displayMenu } from './menu'

displayAbout();
//displayMenu();

const addTabs = () => {
    const header = document.getElementById('header');
    const tabs = document.createElement('nav');
    const about = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');
    
    header.appendChild(tabs);
    tabs.appendChild(about);
    tabs.appendChild(menu);
    tabs.appendChild(contact);

    about.innerHTML = 'About';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';

    tabs.setAttribute('id', 'nav');
    about.setAttribute('id', 'about');
    menu.setAttribute('id', 'menu');
    contact.setAttribute('id', 'contact');
    const currentNav = tabs.getElementsByTagName('button');
    for (let i = 0; i < currentNav.length; i++) {
        currentNav[i].setAttribute('class', 'tab');
        currentNav[i].addEventListener('click', (e) => {
            switchTab();
            console.log(i.id);
        });
    };

}

const switchTab = (e) => {
    
}

addTabs();