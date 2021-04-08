class DiegoNinja {
    constructor (nombre, salud , velocidad , fuerza){
        this.nombre = NinjaWarrior23;
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
        $(this.salud +=10);
    }
    
}
DiegoNinja.sayName();
DiegoNinja.showStats();
DiegoNinja.drinkSake();



const