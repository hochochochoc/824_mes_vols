
class Jet extends Avion {
    constructor(numeroAvion, marca, modelo, cargaKg, largo) {
        super (numeroAvion, marca, modelo, cargaKg, largo);
    }
    limpieza() {
        let limpieza = super.limpieza()/2 + 15;
        return limpieza;
    }    
    calcCostReserva() {
        let pasajeros = prompt("Indica el número de pasajeros: ")
        while (pasajeros > 10){
            pasajeros = prompt("Número de pasajeros no puede superar a 10.\nIndica el número de pasajeros: ")
        }
            return pasajeros * 1000;
    }
    toString(){
        let mostrar = super.toString();
        mostrar += `\n Coste de reserva: ${this.calcCostReserva()}€`;
        mostrar += `\n Tiempo de limpieza: ${this.limpieza()} minutos`
        return mostrar;
    }
}