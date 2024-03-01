//arrego que encripta


//elementos del html variables 
let textoUsuario=document.getElementById('texto');
let resultado= document.querySelector('.oculto')
let imgm=document.querySelector('.img')
let imgf= document.getElementById('frame5')
let btnCopiar=document.getElementById('copiar').value;


//liseners


//funciones
//validacion solo letras minusculas usando una exprecion regular
function validarEntrada(textoUsuario) {
    // Reemplazar cualquier carácter que no sea una letra minúscula con una cadena vacía
    textoUsuario.value = textoUsuario.value.replace(/[^a-z\s]/g, '');
}
//funcion que toma la cadena de texto y remplasa con los parametros dados
function encriptarBoton(){
    const textoEncriptado=textoUsuario.value.
    replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat')
    if(textoUsuario.lenght !== 0){
        ocultar();
        resultado.textContent=textoEncriptado;   
    }             
   
    }
//funcion asociada al boton desencripta la cual vuelve el texto a su desencriptado
function desencriptar(){
    const textoEncriptado=textoUsuario.value.
    replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u')
    if(textoUsuario.lenght !== 0){
        ocultar();
        resultado.textContent=textoEncriptado;   
    }

}
//funcion que oculta por medio de classes 
function ocultar(){
    resultado.classList.remove('oculto');
    imgm.classList.add('esconder');
    imgf.classList.add('esconder');   
}
//funcion que reinicia la app con el metodo window.location.reload()
function reiniciar(){
    window.location.reload();

}    
//funcion que copia el mensaje encriptado y lo pone en el text area de uso de usuario
function copiar(){    
    
    textoUsuario.value=resultado.value;
   
    resultado.classList.add('oculto');
    imgm.classList.remove('esconder');
    imgf.classList.remove('esconder');
    textoUsuario.innerText=resultado.value;
    console.log(resultado.value);
}

