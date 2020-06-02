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
    addCurrentMenu();
    setMenuStyles();
}

const createMenuGrid = () => {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.style.display = 'grid';
    menu.style.gridAutoRows = 'auto';
    menu.style.gridGap = '20px';
    menu.style.justifyContent = 'center';
    main.appendChild(menu);
}

const addCurrentMenu = () => {
    const schnitzel = MenuItem('schnitzel on a bun', '$10', 'Sugar Shack pork schnitzel, grainy mustard, mixed greens');
    const deli = MenuItem('the marans deli sandwich', '$10', 'Selection of soft and hard cured meats, mustard aioli, mixed greens');
    const tomato = MenuItem('toasted tomato and brie', '$10', 'Vine-ripened tomato, Brie, soy ginger vinaigrette, mixed greens');
    const cheese = MenuItem('grilled cheese', '$8', 'All the cheese');
    const ham = MenuItem('ham', '$8', 'All the ham');
    
    currentMenu.push(schnitzel, deli, tomato, cheese, ham);

    for ( let i = 0; i < currentMenu.length; i++ ) {
        currentMenu[i].render();
    }
}

const setMenuStyles = () => {
    //console.log('styles coming soon')
};

const MenuItem = (name, price, description) => {
    
    const render = () => {
        const item = document.createElement('div');
        const itemName = document.createElement('div');
        const itemPrice = document.createElement('div');
        const itemDescription = document.createElement('div');

        item.setAttribute('id', 'menuItem');
        itemName.setAttribute('id', 'itemName');
        itemPrice.setAttribute('id', 'itemPrice');
        itemDescription.setAttribute('id', 'itemDescription');

        itemName.innerHTML = name;
        itemPrice.innerHTML = price;
        itemDescription.innerHTML = description;

        item.appendChild(itemName);
        item.appendChild(itemPrice);
        item.appendChild(itemDescription);
        menu.appendChild(item);

    }

    return { render };
};

export { displayMenu };