//FORMULA IMC: PESO/ALTURA*ALTURA


function MeuEscopo() {

    const form = document.querySelector('.form');
    const resposta = document.querySelector('.resposta');



    function eventoSubmit(evento) {

        evento.preventDefault();

        const pesoInput = evento.target.querySelector('#peso-input');
        const alturaInput = evento.target.querySelector('#altura-input');

        const peso = Number(pesoInput.value);
        const altura = Number(alturaInput.value);

        if (!peso) {
            setResultado('Peso invalido', false);
            return;
        }

        if (!altura) {
            setResultado('Altura invalida', false);
            return;
        }

        const imc = getIMC(peso, altura);
        const nivel = getNivelPeso(imc);

        const msg = `Seu IMC é ${imc} (${nivel})`;

        setResultado(msg, true, imc);
    }

    function setResultado(msg, valido, imc) {
        const resultado = document.querySelector('.resposta');
        resultado.innerHTML = '';

        const p = criaP();

        if (valido) {
            if (18.6 <= imc && imc <= 24.9) {
                p.classList.add('resposta-boa');
            }
            if (25 <= imc  && imc <= 29.9) {
                p.classList.add('resposta-media');
            }
            if (imc <= 18.5 || imc >= 30) {
                p.classList.add('resposta-ruim');  
            }

        }

        if (!valido) {
            p.classList.add('resposta-ruim');
        }

        p.innerHTML = msg;
        resposta.appendChild(p);

    }

    function criaP() {
        const p = document.createElement('p');
        return p;
    }

    function getIMC(peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    function getNivelPeso(imc) {

        const nivel = ['Abaixo do normal','Peso normal','Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }

    form.addEventListener('submit', eventoSubmit);
}

MeuEscopo();


