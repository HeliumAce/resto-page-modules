const displayContact = () => {
    clearMainContent();
    updateMainContent();
};

const clearMainContent = () => {
    const main = document.getElementById('main');
    main.innerHTML = '';
};

const updateMainContent = () => {
    const main = document.getElementById('main');
    const contactInfo = document.createElement('div');
    const contactForm = document.createElement('div')
    contactInfo.setAttribute('id', 'contactInfo')
    contactForm.setAttribute('id', 'contactForm')
    main.appendChild(contactInfo);
    main.appendChild(contactForm);
    addContactInfo();
    addContactForm();
}

const addContactInfo = () => {
    contactInfo.innerHTML =
                    `<p><strong>THE MARANS DINE BAR</strong><br>
                    222 Main St<br>
                    Picton, ON<br>
                    K0K 2T0</p>
                    <p><strong>OPEN: </strong>WEDNESDAY-SUNDAY 2PM TO 8PM</p>
                    <p><strong>Phone: </strong>555-555-5555</p>
                    <p><strong>Please fill out the form below</strong> with your inquiry and we'll be in touch</p>`
};

const addContactForm = () => {
    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const messageLabel = document.createElement('label');
    const messageInput = document.createElement('textarea');
    const contactButton = document.createElement('button');

    nameInput.setAttribute('type', 'text');
    emailInput.setAttribute('type', 'text');
    //messageInput.setAttribute('type', 'textarea');
    messageInput.setAttribute('id', 'messageInput');
    messageInput.setAttribute('rows', '10');
    contactButton.setAttribute('id', 'contactButton');

    nameLabel.innerHTML = 'YOUR NAME';
    emailLabel.innerHTML = 'YOUR EMAIL';
    messageLabel.innerHTML = 'YOUR MESSAGE'
    contactButton.innerHTML = 'SEND';

    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(messageInput);
    contactForm.appendChild(contactButton);
    
};

export { displayContact };