let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");

//sigue el codigo
btnEnviar.addEventListener("click", () => {
  let mayor : number = 0;
  let numeroIngresado = Number(prompt("Ingrese un numero"));
 
    while(numeroIngresado<>0){
       let numeroIngresado = Number(prompt("Ingrese un numero"));
       if(numeroIngresado>mayor){
         mayor==numeroIngresado;
      }
      }
      console.log("El numero mayor ingresado es:",mayor);
  });
  
