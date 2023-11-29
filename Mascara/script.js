const inputTarjeta = document.getElementById("inputTarjeta")
const inputFecha = document.getElementById("inputFecha")
const inputCVV = document.getElementById("inputCVV")

const mascaraNumero = "####-####-####-####";
const mascaraFecha = "##/##";
const mascaraCVV = "##";

let TarjetaNumero = [];
let FechaNumero = [];
let cvvNumero = [];

//escucha cuando las teclas son oprimidas
inputTarjeta.addEventListener("keydown", (e) => {
    //condicion si oprime la tecla tab no va a realizar ninguna acción
  if(e.key === "Tab"){
    return;
  }
  //restringuimos al usuario los datos que yo le asigno
  e.preventDefault();
//llamamos función con sus parametros y almacena datos que el ususario ingresa
ingresoDatos(mascaraNumero, e.key, TarjetaNumero);
//Envia la informacion que el ususario dijito
inputTarjeta.value = TarjetaNumero.join("");
});

inputFecha.addEventListener("keydown", (e) => {
    if(e.key === "Tab"){
        return;
    }
    e.preventDefault();


    ingresoDatos(mascaraFecha, e.key, FechaNumero);
    inputFecha.value = FechaNumero.join("");
});

inputFecha.addEventListener("keydown", (e) => {
    if(e.key === "Tab"){
        return;
    }
    e.preventDefault();


    ingresoDatos(mascaraCVV, e.key, cvvNumero);
    inputCVV.value = cvvNumero.join("");
});

//creamos funcion de ingreso de datos 

function ingresoDatos(mascara, key, arreglo){
    //creamos variable que sea lo unico que pueda ingresar el usuario
    let numeros = ["0","1","2","3","4","5","6","7","8","9"];
    //condicional para borrar dato del arreglo
    if(key === "Backspace" && arreglo.length > 0){
        arreglo.pop();
        return;
    }

    //si empieza a escuchar teclas de letras no va a enviar esa información a el arreglo
    if(numeros.includes(key) && arreglo.length + 1 <= mascara.length){
        //Depende la mascara  del arreglo coloca o un - o un /
        if(mascara[arreglo.length] === "-" || mascara[arreglo.length] === "/"){
        arreglo.push(mascara[arreglo.length], key);
        }else{
            arreglo.push(key);
        }
    }
};