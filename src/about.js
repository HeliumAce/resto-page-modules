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
    promoImage.setAttribute('src', '../imgs/promoImage.jpg');
    main.appendChild(promoImage);
    promoImage.style.display = 'block';
    promoImage.style.margin = '20px auto';
};

const displayQuotes = () => {
    const promoText = document.createElement('div');
    const quotes = document.createElement('div');
    promoText.setAttribute('id', 'promoText');
    quotes.setAttribute('id', 'quotes');
    
    quotes.innerHTML = 
            `“It’s only twenty seats, how hard could it be?”<br>
            “How do you get such wonderful flavours in such a small kitchen?”<br>
            “Mapo Tofu? Never heard of it. Can we all get an order?”`
    quotes.style.fontSize = '20px';
    quotes.style.fontStyle = 'italic';
    quotes.style.textAlign = 'center';
    quotes.style.lineHeight = '32px';
    quotes.style.margin = '40px 0';
    
    main.appendChild(promoText);
    promoText.appendChild(quotes);
};

const displayAboutText = () => {
    const aboutText = document.createElement('div');
    aboutText.setAttribute('id', 'about');
    aboutText.innerHTML = 
                `It’s true that The Marans is a restaurant paradox. It is only 650 sq ft. The kitchen has no commercial cooking equipment. And yet, on any given evening, a passerby can smell curry on the air, see the chandeliers glow on the sidewalk and hear the laughter and banter of the patrons inside. It is a small restaurant that has created a large presence.<br><br>
                Tucked in next to the historic Regent Theatre right in the heart of Picton, The Marans has felt at home as soon as the doors opened in March 2019. It is a restaurant that serves Internationally inspired dishes, prepared with local flare, using fresh local ingredients.`
    aboutText.style.fontSize = '17px';
    aboutText.style.maxWidth = '600px';
    aboutText.style.display = 'block';
    aboutText.style.lineHeight = '32px';
    aboutText.style.margin = '40px auto';
    promoText.appendChild(aboutText);
};

export { displayAbout };