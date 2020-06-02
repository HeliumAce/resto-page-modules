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
    const pancakes = MenuItem('breakfast', 'Chocolate Pancakes', '$12', 'Jumbo chocolate chips nestled deep in fluffy, gooey, pancake-y goodness');
    const granola = MenuItem('breakfast', 'Mommy\'s Yogurt and Granola', '$10', 'Homemade crunchy, sweet granola smothered in creamy vanilla yogurt');
    const eggs = MenuItem('breakfast', 'Facon and Eggs', '$12', 'Crispy veggie "Facon" and eggs any way you like \'em');
    const mac = MenuItem('lunch', 'Mac and Cheese', '$8', 'The classic. Macaroni noodles drenched in all the cheese');
    const pizza = MenuItem('lunch', 'Mushroom Pizza', '$12', 'All the "fun guys" you can imagine sandwiched between tomato sauce and cheese on a made in house crust');
    const nuggets = MenuItem('lunch', '"Chicken" fingers and nuggets', '$10', 'Hot and crispy fingers and nuggets. Better than the real thing');
    const pickles = MenuItem('sides', 'Pickles', '$5', 'Sweet and sour pickles');
    const olives = MenuItem('sides', 'Oilves', '$5', 'Marinated to perfection and pitted for your convenience');
    const fries = MenuItem('sides', 'French Fries', '$6', 'Classic, crispy fries with a side of ketchup and mayo');  
    const tots = MenuItem('sides', 'Tator Tots', '$6', 'Golden, crunchy tots for when you\'ve had enough fries');  
    const juice = MenuItem('drinks', 'Juice', '$4', 'Apple, Orange, Pinneaple');  
    const milk = MenuItem('drinks', 'Milk', '$8', 'Straight from the cows udder');  
    const chocSmoothie = MenuItem('drinks', 'Chocolate Smoothie', '$8', 'Chocolate, PB, banana. Can\'t beat it');  
    const fruitSmoothie = MenuItem('drinks', 'Fruit Smoothie', '$8', 'Berries, spinach, yogurt, avocado, yum');  
    const beer = MenuItem('drinks', 'Beer (for Dad)', '$7', 'A selection of local craft faves');         
    
    
    currentMenu.push(pancakes, granola, eggs, mac, pizza, nuggets, pickles, olives, fries, tots, juice, milk, chocSmoothie, fruitSmoothie, beer);
};

const addCurrentMenu = () => {
    const menuCats = ['breakfast', 'lunch', 'lunch', 'drinks']
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