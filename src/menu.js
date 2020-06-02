const currentMenu = [];

const displayMenu = () => {
    clearMainContent();
    updateMainContent();
};

const clearMainContent = () => {
    let updateMenu = currentMenu.length
    for (let i = 0; i <= updateMenu; i++) {
        currentMenu.pop();
    };
    const main = document.getElementById('main');
    main.innerHTML = '';
}

const updateMainContent = () => {
    createMenuGrid();
    buildMenu();
    addCurrentMenu();
}

const createMenuGrid = () => {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    main.appendChild(menu);
}

const buildMenu = () => {
    const schnitzel = MenuItem('small plates', 'schnitzel on a bun', '$10', 'Sugar Shack pork schnitzel, grainy mustard, mixed greens');
    const deli = MenuItem('small plates', 'the marans deli sandwich', '$10', 'Selection of soft and hard cured meats, mustard aioli, mixed greens');
    const tomato = MenuItem('sandwiches', 'toasted tomato and brie', '$10', 'Vine-ripened tomato, Brie, soy ginger vinaigrette, mixed greens');
    const cheese = MenuItem('sandwiches', 'grilled cheese', '$8', 'All the cheese');
    const ham = MenuItem('sides', 'ham', '$8', 'All the ham');    
    currentMenu.push(schnitzel, deli, tomato, cheese, ham);
};

const addCurrentMenu = () => {
    const menuCats = ['small plates', 'sandwiches', 'sides']
    for ( let i = 0; i < menuCats.length; i++ ) {
        let currentCat = document.createElement('div');
        currentCat.setAttribute('id', menuCats[i]);
        currentCat.setAttribute('class', 'menuCat');
        currentCat.innerHTML = menuCats[i];
        menu.appendChild(currentCat);
        appendMenuItems(currentCat);
    }
}

const appendMenuItems = (currentCat) => {
    for ( let i = 0; i < currentMenu.length; i++ ) {  
        if (currentCat.id === currentMenu[i].getCategory()) {
            currentMenu[i].render();
        }
    }
};

const MenuItem = (category, name, price, description) => {
    
    const render = () => {
        const item = document.createElement('div');
        const itemName = document.createElement('div');
        const itemPrice = document.createElement('div');
        const itemDescription = document.createElement('div');

        item.setAttribute('class', 'menuItem');
        itemName.setAttribute('class', 'itemName');
        itemPrice.setAttribute('class', 'itemPrice');
        itemDescription.setAttribute('class', 'itemDescription');

        itemName.innerHTML = name;
        itemPrice.innerHTML = price;
        itemDescription.innerHTML = description;

        item.appendChild(itemName);
        item.appendChild(itemPrice);
        item.appendChild(itemDescription);
        menu.appendChild(item);

    }

    const getCategory = () => category;

    return { render, getCategory };
};

export { displayMenu };