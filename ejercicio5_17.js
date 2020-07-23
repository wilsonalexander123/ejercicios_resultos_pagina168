let choferes = [
    {
      nombre: "Jesus prado",
      sueldoXhora: 10.00,
      horas_trabajadas:[8, 8, 8, 8, 8,8],
  
    },
    {
      nombre: "Alex cotrina",
      sueldoXhora: 15.00,
      horas_trabajadas: [0, 8, 8, 8, 8,0],
      
    },
    {
      nombre: "Wilmer Aguirre",
      sueldoXhora: 20.00,
      horas_trabajadas:[0, 8, 0, 8, 0,8],
     
    },
    {
      nombre: "Jose pacheco",
      sueldoXhora: 15.00,
      horas_trabajadas: [8, 0, 0,0, 8,8],
      
    },
    {
        nombre: "Pedro Ramirez",
        sueldoXhora: 10.00,
        horas_trabajadas: [0, 8, 8, 0, 8,0],
        
      },
  ];
  let acumulador1=0;
  let acumulador2=0;
  let acumulador3=0;
  let acumulador4=0;
  let acumulador5=0;
  
  
      for (let i = 0; i< choferes[0].horas_trabajadas.length ; i++) {
        acumulador1+=choferes[0].horas_trabajadas[i];
          
      }
      for (let i = 0; i< choferes[1].horas_trabajadas.length ; i++) {
        acumulador2+=choferes[1].horas_trabajadas[i];
          
      }
      for (let i = 0; i< choferes[2].horas_trabajadas.length ; i++) {
        acumulador3+=choferes[2].horas_trabajadas[i];
          
      }
      for (let i = 0; i< choferes[3].horas_trabajadas.length ; i++) {
        acumulador4+=choferes[3].horas_trabajadas[i];
          
      }
      for (let i = 0; i< choferes[4].horas_trabajadas.length ; i++) {
        acumulador5+=choferes[4].horas_trabajadas[i];
          
      }
     let horas_laboradas=0;
     let contador=0;
     let nombres=[];
     for (let j = 0; j < choferes.length; j++) {
            if (choferes[j].horas_trabajadas[0]>horas_laboradas) {
              horas_laboradas=choferes[j].horas_trabajadas[0];  
              nombres.push(choferes[j].nombre)          
              contador=contador+1;
           
          }
          
       
     }
      console.log(`las horas trabajadas del chofer ${choferes[0].nombre} es ${acumulador1} horas`);
      console.log(`el sueldo semanal del ${choferes[0].nombre} es  ${acumulador1*choferes[0].sueldoXhora} soles`);
      console.log(`las horas trabajadas del chofer ${choferes[1].nombre} es ${acumulador2} horas`);
      console.log(`el sueldo semanal del ${choferes[1].nombre} es  ${acumulador2*choferes[1].sueldoXhora} soles`);
      console.log(`las horas trabajadas del chofer ${choferes[2].nombre} es ${acumulador3} horas`);
      console.log(`el sueldo semanal del ${choferes[2].nombre} es  ${acumulador3*choferes[2].sueldoXhora} soles`);

      console.log(`las horas trabajadas del chofer ${choferes[3].nombre} es ${acumulador4} horas`);
      console.log(`el sueldo semanal del ${choferes[3].nombre} es  ${acumulador4*choferes[3].sueldoXhora} soles`);

      console.log(`las horas trabajadas del chofer ${choferes[4].nombre} es ${acumulador5} horas`);
      console.log(`el sueldo semanal del ${choferes[4].nombre} es  ${acumulador5*choferes[4].sueldoXhora} soles`);
      console.log(`la empresa pagara en total ${acumulador1*choferes[0].sueldoXhora+acumulador2*choferes[1].sueldoXhora+acumulador3*choferes[2].sueldoXhora+acumulador4*choferes[3].sueldoXhora+acumulador5*choferes[4].sueldoXhora} soles`)
     console.log(contador);
     console.log(`los chofer que labora mas el dia lunes es ${nombres}`);
          
      
   
      
  
 