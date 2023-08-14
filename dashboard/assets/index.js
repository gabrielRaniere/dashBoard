const closeBtn = document.querySelector('.btn-open-close');
const descricao = document.querySelectorAll('.description');
const icon = document.querySelectorAll('.icon');

let openClose = false
closeBtn.addEventListener('click', function(){
    openClose = !openClose;
    if(openClose) closeBtn.innerHTML = '<i class="bx bxs-left-arrow" ></i>';
    if(!openClose) closeBtn.innerHTML = '<i class="bx bxs-right-arrow"></i>';

    descricao.forEach(valor => {
        valor.classList.toggle('display-block');
    });

    icon.forEach(valor => {
        valor.classList.toggle('center');
    });
}) ;

const dashBoard = document.querySelector('.dashboard');
const darkBtn = document.querySelector('.bola');
const search = document.querySelectorAll('.search');

darkBtn.parentElement.addEventListener('click', () => {
    darkBtn.classList.toggle('translate');
    darkBtn.classList.toggle('color-fundo');
    dashBoard.classList.toggle('color-fundo');
    dashBoard.parentElement.classList.toggle('color-fundo');

    search.forEach(valor => {
        valor.classList.toggle('color-fundo');
    })
})