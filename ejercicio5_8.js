let vector1=[];
let vector2=[];

for (let i = 0; i < 10; i++) {
   let nombre =prompt(`ingrese el nombre del alumno ${i+1}`);
   vector1.push(nombre);
         
 }
 for (let j = vector1.length-1 ; j>= 0; j--) {
   vector2.push(vector1[j])
}
console.log(vector1);
 console.log(vector2);

