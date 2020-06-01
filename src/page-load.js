const displayContent = () => {
    createDivs();
    displayHeader();
    displayMainContent();
};

const createDivs = () => {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const logo = document.createElement('img');
    const main = document.createElement('main');
    const promoImage = document.createElement('img');
    const promoText = document.createElement('div');

    header.setAttribute('id', 'header');
    logo.setAttribute('id', 'logo');
    logo.setAttribute('src', '../imgs/logo.png');
    main.setAttribute('id', 'main');
    promoImage.setAttribute('id', 'promoImage');
    promoImage.setAttribute('src', '../imgs/promoImage.jpg');
    promoText.setAttribute('id', 'promoText');
    
    content.appendChild(header);
    header.appendChild(logo);
    content.appendChild(main);
    main.appendChild(promoImage);
    main.appendChild(promoText);

};

const displayHeader = () => {
    logo.style.height = '160px';
    logo.style.display = 'block';
    logo.style.margin = '60px auto';
};

const displayMainContent = () => {
    promoImage.style.display = 'block';
    promoImage.style.margin = '20px auto';
    promoText.innerHTML = '“How do you get such wonderful flavours in such a small kitchen?”'
    promoText.style.fontSize = '24px';
    promoText.style.fontStyle = 'italic';
    promoText.style.textAlign = 'center';
    promoText.style.margin = '20px 0';
};

export { displayContent };