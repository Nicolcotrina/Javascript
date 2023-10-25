let esqueleto = "off"
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonAudio = new Audio('./audios/botonbailar.mp3')
let botonSonido = new Audio('./audios/audio.mp3')


function bailar(){
    if (esqueleto == "off") {
        esqueleto = "on";
        esqueletoStop.classList.add("on")
        esqueletoStop.addEventListener('click',()=> {   
        botonSonido.play();
    });
    esqueletoStop.addEventListener('click',()=> {   
        botonSonido.play();
    });   
    }else {
    esqueleto = "off"
    esqueletoStop.classList.remove("on");
    esqueletoStop.addEventListener('click',()=> {   
        botonSonido.pause();
    });  
    console.log("Off");
    }
}