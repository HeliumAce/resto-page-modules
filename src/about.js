const displayAbout = () => {
    clearMainContent();
    updateMainContent();
};

const clearMainContent = () => {
    const main = document.getElementById('main');
    main.innerHTML = '';
};

const updateMainContent = () => {
    displayPromoImage();
    displayQuotes();
    displayAboutText();
};

const displayPromoImage = () => {
    const promoImage = document.createElement('img');
    promoImage.setAttribute('id', 'promoImage');
    promoImage.setAttribute('src', 'imgs/promoImage.jpg');
    main.appendChild(promoImage);
};

const displayQuotes = () => {
    const promoText = document.createElement('div');
    const quotes = document.createElement('div');
    promoText.setAttribute('id', 'promoText');
    quotes.setAttribute('id', 'quotes');
    
    quotes.innerHTML = 
            `“It’s only twenty seats, how hard could it be?”<br>
            “How do you get such wonderful flavours from such a little chef?”<br>
            “Protein pancakes? Never heard of it. Can we all get an order?”`
    
    main.appendChild(promoText);
    promoText.appendChild(quotes);
};

const displayAboutText = () => {
    const aboutText = document.createElement('div');
    aboutText.setAttribute('id', 'about');
    aboutText.innerHTML = 
                `<strong>It’s true that Joni's is a restaurant paradox.</strong> It is only 650 sq ft. The kitchen has no commercial cooking equipment. And yet, on any given evening, a passerby can smell facon on the air, see the smiling faces glow on the sidewalk and hear the laughter and banter of the patrons inside. It is a small restaurant that has created a large presence.<br><br>
                Tucked in next to the historic Mouse Trap Theatre right in the heart of Picton, Joni's has felt at home as soon as the doors opened in March 2035. It is a restaurant that serves Mom inspired dishes, prepared with local flare, using fresh local ingredients.`
    promoText.appendChild(aboutText);
};

export { displayAbout };