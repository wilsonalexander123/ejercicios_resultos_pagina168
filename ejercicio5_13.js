
let notas = [15, 10, 18, 07, 15, 12, 10,11,14,07,11,16,19,14,20];
suma=0;
promedio=0;
contador=0;
cantmayoralpromedio=0
for (let i = 0; i < notas.length; i++) {

       suma+=notas[i];
        
  }
  promedio=suma/notas.length;
  while (contador<notas.length) {
        if (notas[contador]>promedio) 
        {
            cantmayoralpromedio++;
        }
        contador++;
      
  }

   console.log(notas);
  console.log(suma);
  console.log(`El promedio del grupo es ${promedio} -la cantidad de alumnos que obtivieron por encima del promedio es ${cantmayoralpromedio}`);