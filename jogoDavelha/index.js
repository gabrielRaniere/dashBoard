const container = document.querySelector('.container');
const blocos = container.querySelectorAll('.bloco');
let lista = [0, 1, 2, 3, 4, 5, 6, 7, 8 ];
const listCopy = [...lista]

let validador = false;

const condVitoria = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal
    [0, 4, 8],
    [2, 4, 6]
];

const showWinner = document.querySelector('.show-winner');
const btnReiniciar = showWinner.querySelector('button');
const winner = showWinner.querySelector('.winner');

blocos.forEach((bloco, i)=>{

    const bola = document.createElement('div');
    bola.classList.add('adc-bola');

    const xis = document.createElement('div');
    xis.classList.add('adc-x');
    xis.innerText = 'x';

    const eventoClick = ()=>{
        validador = !validador
        if(validador) {
            bloco.appendChild(bola);
            document.body.style.backgroundColor = 'blue';
            lista.splice(i, 1, 'o')

        }else {
            bloco.appendChild(xis)
            document.body.style.backgroundColor = 'red';
            lista.splice(i, 1, 'x')
        }

        bloco.removeEventListener('click', eventoClick);

        setTimeout(analisaVencedor, 1000)
    };
    bloco.addEventListener('click', eventoClick);
});

function finish(valor) {
    showWinner.classList.add('display');
    if(valor === 'o') winner.style.color = 'red';
    if(valor === 'x') winner.style.color = 'blue';
    winner.innerHTML = valor;
}

function analisaVencedor() {
    for(let v of condVitoria) {
        if(lista[v[0]] === lista[v[1]]  && lista[v[1]] === lista[v[2]]) {
            finish(lista[v[0]]);
            return;
        }
        const empate = isEmpate();
        if(empate) {
            alert('deu empate !')
        }
    }
};

function isEmpate() {
    let cont = 0;
    for(let v of lista) {
        for(let v1 of listCopy) {
            if(v !== v1) cont++;
        }
    }
    if(cont === 8) return true;
}

btnReiniciar.addEventListener('click', ()=>{
    showWinner.classList.remove('display');
});
