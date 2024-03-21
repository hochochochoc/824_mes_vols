class Avion {
    constructor(numeroAvion, marca, modelo, cargaKg, largo) {
        this.numeroAvion = numeroAvion;
        this.marca = marca;
        this.modelo = modelo;
        this.cargaKg = cargaKg;
        this.largo = largo;
    }

    limpieza(){
        return this.largo * 10;
    }
    combustibleNecesario(){
        return this.largo * this.cargaKg;
    }
    toString(){
        let mostrar = `Número del avión: ${this.numeroAvion}\n Marca: ${this.marca}\n Modelo: ${this.modelo}`
        mostrar += `\n Litros de combustible necesarios: ${this.combustibleNecesario()}l`;
        return mostrar;
    }   
}
