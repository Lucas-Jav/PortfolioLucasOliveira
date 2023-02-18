export function showWakatime() {
    const divBg = document.querySelector('.menu-modal');

    const wktmModal = document.createElement('div');
    wktmModal.classList.add('wakatimeModal')

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const headerModal = document.createElement('div');
    headerModal.classList.add('headerModal');

    const h2 = document.createElement('h2');
    headerModal.textContent = 'Wakatime';

    const btnClose = document.createElement('button');
    btnClose.textContent = 'X';

    const bodyModal = document.createElement('div');
    bodyModal.classList.add('bodyModal');
    bodyModal.innerHTML = `
    <h4>Tecnologias:</h4>
    <figure><embed src="https://wakatime.com/share/@Luk1/2dddb80a-d90d-44d1-b7b2-ef1a683a4c58.svg"></embed></figure>
    <h4>Total de Horas:</h4>
    <figure><embed src="https://wakatime.com/share/@Luk1/a0e989cc-36cf-4d21-9a63-a811e4dcbd1e.svg"></figure>
    <div class="showMore">
        <a href="https://wakatime.com/@Luk1" target="_blank">Veja mais</a>
    </div>
    `;

    btnClose.addEventListener('click', () => {
        divBg.style.display = 'none';
        divBg.removeChild(wktmModal);
    });

    divBg.appendChild(wktmModal);
    wktmModal.appendChild(modal);
    modal.append(headerModal, bodyModal);
    headerModal.append(h2, btnClose);
}