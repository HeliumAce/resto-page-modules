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
    logo.setAttribute('src', 'imgs/logo.png');
    main.setAttribute('id', 'main');
    
    content.appendChild(header);
    header.appendChild(logo);
    content.appendChild(main);
};

const displayHeader = () => {
    logo.style.height = '220px';
    logo.style.display = 'block';
    logo.style.margin = '20px auto';
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

    about.innerHTML = 'ABOUT US';
    menu.innerHTML = 'MENU';
    contact.innerHTML = 'CONTACT';

    tabs.setAttribute('id', 'nav');
    about.setAttribute('id', 'aboutTab');
    menu.setAttribute('id', 'menuTab');
    contact.setAttribute('id', 'contactTab');
    
    addTabClass();
}

const addTabClass = () => {
    const nav = document.getElementById('nav');
    const tabs = nav.getElementsByTagName('button');

    for (let i = 0; i < tabs.length; i++) {
        let currentTab = tabs[i]
        currentTab.setAttribute('class', 'tab');
    }
}

export { loadSite  };