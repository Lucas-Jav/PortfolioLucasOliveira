export function showMenu() {
    const divBg = document.querySelector('.menu-modal');
    divBg.style.display = 'flex';

    const buttonCloseModal = document.createElement('button');
    buttonCloseModal.textContent = 'X';

    const divListLi = document.createElement('div');
    divListLi.classList.add('listModal');
    divListLi.innerHTML = `
        <ul>
            <li><a href="#home" class="close">Home</a></li>
            <li><a href="#about" class="close">About</a></li>
            <li><a href="#work" class="close">Work</a></li>
            <li><a href="#contract" class="close">Contract</a></li>
        </ul>`

    divListLi.addEventListener('click', () => {
        setTimeout(() => {
            divBg.style.display = 'none';
    
            divListLi.remove();
            divBg.removeChild(buttonCloseModal);
        }, 100)
    })
    
    
    buttonCloseModal.addEventListener('click', () => {
        divBg.style.display = 'none';

        divListLi.remove();
        divBg.removeChild(buttonCloseModal);
    })
    
    return divBg.append(buttonCloseModal, divListLi);
}
