function tocaSom(idaudio) {
    const elemento = document.querySelector(idaudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Elemento não encontrado');
    }
}

const listadeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listadeTeclas.length;contador++) {

    const tecla = listadeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    
}