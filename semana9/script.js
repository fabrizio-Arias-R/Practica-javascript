
nombre_zora='<h2 class="fondo sora" id="nombre_gen0">tokino sora</h2>'
nombre_azki='<h2 class="fondo azki" id="nombre_gen0">AZKI</h2>'
nombre_roboco='<h2 class="fondo roboco" id="nombre_gen0">roboco</h2>'

nombre_gen0=["Nombres del gen0",nombre_zora,nombre_azki,nombre_roboco];


let azki='<img onclick="Avanzar_imagen()" src="img/azki.jpg" alt="">';

let zora='<img onclick="Avanzar_imagen()"  src="img/sora.jpg" alt="">';

let roboco='<img onclick="Avanzar_imagen()" src="img/roboco.jpg" alt="">';

let gen0=["zona_gen0",zora,azki,roboco]



function Dar_bienvinida(){
     const nombre=prompt("¿Cual es tu nombre?");
    alert("¡Buenos dias, "+ nombre+"!");
    alert("Hoy aprenderemos sobre los arreglos");
}



let contador_gen0=1;


function Avanzar_imagen(){
    
    contador_gen0=contador_gen0+1;
    if(contador_gen0>3){
        contador_gen0=3;
    }
    document.getElementById("zona_gen0").innerHTML=gen0[contador_gen0];
    document.getElementById("remplazo_nombre").innerHTML=nombre_gen0[contador_gen0];

}

function Retroceder_imagenes(){
    contador_gen0=contador_gen0-1;
    if(contador_gen0<1){
        contador_gen0=1;
    }
    document.getElementById("zona_gen0").innerHTML=gen0[contador_gen0];
    document.getElementById("remplazo_nombre").innerHTML=nombre_gen0[contador_gen0];

}

function Dar_inicio(){
     location.reload();
}

