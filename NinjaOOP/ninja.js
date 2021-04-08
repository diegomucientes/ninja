class DiegoNinja {
    constructor (nombre){
        this.nombre = nombre;
        this.salud = 10; 
        this.velocidad = 3;
        this.fuerza = 3; 
    }
    sayName(){
        console.log (`Hola mi nombres es ${this.nombre}`);
    }
    showStats(){
        console.log(`${this.nombre}`,`${this.fuerza}`,`${this.velocidad}`,`${this.salud}`);
    }
    drinkSake(){
        this.salud +=10;
    }
    
}
let prueba = new DiegoNinja("NinjaWarrior23",10,3,3);
prueba.sayName();
prueba.showStats();
prueba.drinkSake();
prueba.showStats();




