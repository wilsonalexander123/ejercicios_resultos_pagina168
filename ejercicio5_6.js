let nombres=[];
let edades=[];
let mayor=0;
let indice=0;
for (let i = 0; i < 10; i++) {
    let nombre =prompt(`ingrese el nombre del alumno ${i+1}`);
    let edad=+prompt(`ingrese la edad del alumno ${i+1}`);
    nombres.push(nombre);
    edades.push(edad);
    if (edades[i]> mayor ) {
        mayor=edades[i];
        indice=i;
     
    }

    
  }
  
 
    console.log(`El alumno ${nombres[indice]} tiene la mayor nota la cual es ${mayor} `);
   