var imagenes = ["imagenes/aguila.jpg", "imagenes/lobos.jpg", "imagenes/jirafa.jpg", "imagenes/leon.jpg", "imagenes/gorilas.jpg", "imagenes/guepardos.jpg", "imagenes/tigre.jpg", "imagenes/zorros.jpg", "imagenes/elefantes.jpg", "imagenes/hipopotamo.jpg"];  
var indiceImg = 0;
var numImg = imagenes.length-1;

function cambiarAdelante() {
    if(indiceImg == imagenes.length-2){
        imagen.src = imagenes[imagenes.length-1];
        adelante.style.opacity=0;  
        adelante.style.display=none;
        indiceImg = 0;
    }    
    if( indiceImg < numImg ) { 
        atras.style.opacity=1;
        adelante.style.opacity=1; 
        if(indiceImg == 1){
            imagen.src = imagenes[1]; 
        }
        indiceImg ++;
        imagen.src = imagenes[indiceImg];
    }
}

function cambiarAtras() {
   
    if( indiceImg > 0 ) {
        atras.style.opacity=1;
        adelante.style.opacity=1; 
        if(indiceImg == 1){ 
            imagen.src = imagenes[0];
            atras.style.opacity=0;  
            atras.style.display=none;            
        }
        indiceImg --;
        imagen.src = imagenes[indiceImg];         
    }   
}

function cargarImagen() {     
    if(indiceImg == 0){ 
        atras.style.opacity=0;
        adelante.addEventListener("click",cambiarAdelante); 
    }   
    atras.addEventListener("click",cambiarAtras);
}

window.addEventListener("load",cargarImagen);

