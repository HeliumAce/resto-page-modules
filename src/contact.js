const displayContact = () => {
    clearMainContent();
    updateMainContent();
};

const clearMainContent = () => {
    const main = document.getElementById('main');
    main.innerHTML = 'CONTACT';
};

export { displayContact };