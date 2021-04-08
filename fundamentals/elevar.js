// //1 
// console.log(hello);                                   
// var hello = 'world';      
// // El interprete lee
// var hello;
// console.log(hello); Muestra indefinido...
// hello=world;

// ......................................................................................................................................................

// //2
// 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// El interprete lee: 

// var needle = "haystack"; 
// function test (){ // La función se sube
//     var needle = "magnet";
//     console.log(needle);
// }
// test();
// Output: "Magnet";
// ......................................................................................................................................................


// 3. var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// El interprete lee: 

// var brendan = "super cool";
// function print(){     // no cambia el orden..
//     brendan = "only okay";
//     console.log(brendan); //
// }
// console.log(brendan); // No se llama a la función 
// // Output: "super cool"
// ......................................................................................................................................................

// 4. var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// // EL INTERPRETE LEE:
// var food = "chicken";
// console.log(food);
// function eat(){
//     var food;
//     food = "half chicken";
//     console.log (food);
//     food="gone";

// }
// eat(); // Output: "chicken" , "half chicken" 
// ......................................................................................................................................................

//5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);


// El interprete lo lee: 
// mean();
// console.log(food);
// var mean;
//     mean = function() {
//     var food; 
//     food = "chicken";
//     console.log (food);
//     food = "fish";
//     console.log (food);
// }


// Output: mean is not a function, no puede subir la función por el console.log...??? COnfirmar esto

// ......................................................................................................................................................
// //6.
// console.log(genre); 
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }    
// console.log(genre);


// El interprete lee:
// console.log(genre);  
// var genre;
// genre= "disco";
// function rewind (){
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = " r&b"
//     console.log(genre);
// }
// rewind ();
// console.log (genre);

//  Output: undifined, rock, r&B, disco;
// ......................................................................................................................................................

// 7. dojo = "san jose"; // variable global
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// El interprete lee: 

// dojo = "san jose";
// console.log (dojo);
// function learn () {
//     var dojo;
//     dojo = "seattle";
//     console.log (dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// learn();
// console.log(dojo);

// Output: "san jose" , "seattle" , "burbank" , "san jose";

//8
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }


// // El interprete lee: 
// function makeDojo(name, students){
//     const dojo = {};    //// La función sube, y al usarse const, debería otorgarle una vez el valor de la función y despues arrojar un error...

//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
















