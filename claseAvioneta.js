// Clase Avioneta
class Avioneta extends Avion {
    constructor(numeroAvion, marca, modelo, cargaKg, largo, helix) {
        super (numeroAvion, marca, modelo, cargaKg, largo);
        this.helix = helix;
    }
    limpieza() {
        let limpieza = super.limpieza()/2;
        return limpieza;
    }
    calcDistancia(){
        return this.helix * 1000;
    }
    toString(){
        let mostrar = super.toString();
        mostrar += `\n Número de hélices: ${this.helix}`;
        mostrar += `\n Tiempo de limpieza: ${this.limpieza()} minutos`
        mostrar += `\n Distancia: ${this.calcDistancia()}`
        return mostrar;
    }
}