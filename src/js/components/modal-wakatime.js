export function showWakatime(id) {
    const divBg = document.querySelector('.menu-modal');

    const wktmModal = document.createElement('div');
    wktmModal.classList.add('wakatimeModal')

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const headerModal = document.createElement('div');
    headerModal.classList.add('headerModal');

    const h2 = document.createElement('h2');
    if (id === 1) headerModal.textContent = 'Wakatime';
    else headerModal.textContent = 'GitHub Status';

    const btnClose = document.createElement('button');
    btnClose.textContent = 'X';

    const bodyModal = document.createElement('div');
    bodyModal.classList.add('bodyModal');

    if (id === 1) {
        bodyModal.innerHTML = `
        <h4>Tecnologias:</h4>
        <figure><embed src="https://wakatime.com/share/@Luk1/2c86a489-effd-419a-81ab-fe20f265958c.svg"></embed></figure>
        <h4>Total de Horas:</h4>
        <figure><embed src="https://wakatime.com/share/@Luk1/a0e989cc-36cf-4d21-9a63-a811e4dcbd1e.svg"></figure>
        <div class="showMore">
            <a href="https://wakatime.com/@Luk1" target="_blank">Veja mais</a>
        </div>
        `;
    } else {
        bodyModal.innerHTML = `
        <div class="imgGit">
        <img 
        src="https://github-readme-stats.vercel.app/api?username=Lucas-Jav&show_icons=true&count_private=true&hide_border=true&title_color=00bfbf&icon_color=00bfbf&text_color=c9d1d9&bg_color=0d1117" alt="lucas oliveira status" />
        <img 
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Lucas-Jav&layout=compact&hide_border=true&title_color=00bfbf&text_color=00bfbf&bg_color=0d1117" />
        </div>

        <p align="center" class="imgGit">
        <img src="https://github-profile-trophy.vercel.app/?username=Lucas-jav&theme=dracula&row=2&column=3&margin-w=auto&margin-h=autobg_color=0D1117" />
        </p>

        <div align="center">
        <br>
        <p align="centre"><b>Visitors Count</b></p>  
        <p align="center"><img align="center" src="https://profile-counter.glitch.me/{Lucas-Jav}/count.svg" /></p> 
        <br>
        </div>

        <div class="showMore">
            <a href="https://github.com/Lucas-Jav" target="_blank">Veja mais</a>
        </div>
        `;
    }

    btnClose.addEventListener('click', () => {
        divBg.style.display = 'none';
        divBg.removeChild(wktmModal);
    });

    divBg.appendChild(wktmModal);
    wktmModal.appendChild(modal);
    modal.append(headerModal, bodyModal);
    headerModal.append(h2, btnClose);
}