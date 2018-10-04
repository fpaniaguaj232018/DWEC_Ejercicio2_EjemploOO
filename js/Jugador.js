class Jugador {
    constructor(nombre, dorsal, isPortero,
        isDefensa, isCentrocampista, isDelantero,
        equipo){
            this.nombre = nombre;
            this.dorsal = dorsal;
            this.isPortero = isPortero;
            this.isDefensa = isDefensa;
            this.isCentrocampista = isCentrocampista;
            this.isDelantero = isDelantero;
            this.equipo = equipo;
    } 
    mostrar(){
        console.log("NOMBRE:" + this.nombre);
        console.log("DORSAL:" + this.dorsal);
        if (this.isPortero) {
            console.log("POSICION: Portero");
        } else if (this.isDefensa) {
            console.log("POSICION: Defensa");
        } else if (this.isCentrocampista) {
            console.log("POSICION: Centrocampista");
        } else if (this.isDelantero) {
            console.log("POSICION: Delantero");
        } 
        console.log("EQUIPO:" + this.equipo);
    }
}