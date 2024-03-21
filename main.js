const aviones = [
    new AviCom(1, "Boeing", "737", 23000.0, 25.0),
    new Avioneta(2, "Cessna", "180", 8.0, 3.4, 3),
    new Jet(3, "Citation", "CJ4", 640.0, 5.0)
]

function escoger() {
    const accionElegida = document.querySelector('input[name="accionElegida"]:checked').value;
    switch (accionElegida) {
        case "darDeAlta":
            darDeAlta();
            break;
        case "eliminarAvion":
            eliminarAvion();
            break;
        case "mostrarAvion":
            mostrarAvion();
            break;
        default:
            break;

    }
}

function mostrarAvion () {
    
    let avionBuscado = parseInt(prompt("Indica el número del avión buscado:"));

    let index = aviones.findIndex(aviones => aviones.numeroAvion === avionBuscado);
    
    if (index === -1) { // Si no existe
        alert("Número no válido.")
    } else {
        
        
        let avion = aviones[index];
        /*
        if (avion instanceof Avioneta) {
            alert(avion.toString());
        } else if (avion instanceof Jet) {
            alert(avion.toString());
        } else if (avion instanceof AviCom) {
            alert(avion.toString());
        }
        */
        alert(avion.toString()); 
        // también está bien así??

        console.table(aviones);
        
        
    }
}


function darDeAlta (){
    let nuevoNumeroAvion = parseInt(prompt("Indica el número del nuevo avión:"));
    let index = aviones.findIndex(avion => avion.numeroAvion == nuevoNumeroAvion);
    
    if (index === -1) {
        let nuevaMarca = prompt("Indica la marca del nuevo avión:");
        let nuevoModelo = prompt("Indica el modelo del nuevo avión:");
        let nuevaCargaKg = parseInt(prompt("Indica la carga del nuevo avión:"));
        let nuevoLargo = parseInt(prompt("Indica el largo del nuevo avión:"));

        let tipoElegido = prompt("Indica el tipo del nuevo avión:");
        let nuevoAvion;
        switch(tipoElegido.toLowerCase()){
            case "avioneta":
                nuevoAvion = new Avioneta(
                    nuevoNumeroAvion,
                    nuevaMarca,
                    nuevoModelo,
                    nuevaCargaKg,
                    nuevoLargo
                );
                break;
            case "avión comercial":
                nuevoAvion = new AviCom(
                    nuevoNumeroAvion,
                    nuevaMarca,
                    nuevoModelo,
                    nuevaCargaKg,
                    nuevoLargo
                );
                break;
            case "jet":
                nuevoAvion = new Jet(
                    nuevoNumeroAvion,
                    nuevaMarca,
                    nuevoModelo,
                    nuevaCargaKg,
                    nuevoLargo
                );
                break;
        }

        
        aviones.push(nuevoAvion);
        alert(nuevoAvion.toString());
        
        console.table(aviones);
        
      
    } else {
        alert("Ya existe un avión con este número.");
    }
}


function eliminarAvion (){
    let avionBuscado = prompt("Indica número del avión a eliminar:");
    let index = aviones.findIndex(avion => avion.numeroAvion == avionBuscado);
    
    if (index === -1) { // Si no existe ya
        alert("Número no válido.");
    } else {
        aviones.splice(index, 1);
        alert(`Avión número ${avionBuscado} borrado.`);
        
        console.table(aviones);
    }
}



///////////////////
// Cosas que debería utilizar:
// Instance of (to find out the type of object in a position)
    // if (avions[2] instanceof Jet) {
// For-in bucle to see all properties and values of an object