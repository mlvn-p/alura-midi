function playSonido (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //almacenamos la lista con un nombre fácil de entender.


for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador);

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function (){
        playSonido(idAudio);
    };

    tecla.onkeydown = function(){
        tecla.classList.add('activa');
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }
}