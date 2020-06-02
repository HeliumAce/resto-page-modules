const loadSite = () => {
    createDivs();
    displayHeader();
};

const createDivs = () => {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const logo = document.createElement('img');
    const main = document.createElement('main');

    header.setAttribute('id', 'header');
    logo.setAttribute('id', 'logo');
    logo.setAttribute('src', '../imgs/logo.png');
    main.setAttribute('id', 'main');
    
    content.appendChild(header);
    header.appendChild(logo);
    content.appendChild(main);
};

const displayHeader = () => {
    logo.style.height = '160px';
    logo.style.display = 'block';
    logo.style.margin = '60px auto';
    addTabs();
};

const addTabs = () => {
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
    about.setAttribute('id', 'aboutTab');
    menu.setAttribute('id', 'menuTab');
    contact.setAttribute('id', 'contactTab');
}

export { loadSite  };