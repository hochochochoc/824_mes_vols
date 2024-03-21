// Clase Avión Comercial
class AviCom extends Avion {
    constructor(numeroAvion, marca, modelo, cargaKg, largo) {
        super (numeroAvion, marca, modelo, cargaKg, largo);
    }
    limpieza() {
        let limpieza = super.limpieza() +240;
        return limpieza;
    }
    calcCostComida(){
        let numPersonas = prompt("Indica el número de pasajeros: ");
        return numPersonas * 10;    
    }
    toString(){
        let mostrar = super.toString();
        mostrar += `\n Coste de comida: ${this.calcCostComida()}€`;
        mostrar += `\n Tiempo de limpieza: ${this.limpieza()} minutos`
        return mostrar;
    }
}