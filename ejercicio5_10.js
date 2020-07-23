
let vector1=[];
let vector2=[];
let result=[];
suma1=0;
suma2=0;

for (let i = 0; i < 10; i++) {
   let numero =+prompt(`ingrese el numero ${i+1}`);
   vector1.push(numero);
   suma1=suma1+numero;
         
 }
 result.push(suma1);
 console.log(vector1);
 console.log(suma1);

 for (let i = 0; i < 10; i++) {
    let numero2 =+prompt(`ingrese el numero del 2do arreglo ${i+1}`);
    vector2.push(numero2);
    suma2=suma2+numero2;
          
  }
  result.push(suma2);
  console.log(vector2);
  console.log(suma2);
  console.log(result);

  console.log(`el vector resultante con la suma del primer y el 2do vector es ${result}`);