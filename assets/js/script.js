

var usuario=0;
var pc=0;
var empate=0;

/*Usuario eligue cuantas jugadas realizara*/
let jugadas=parseInt(prompt("Ingrese el numero de jugadas"));
 alert( "Elejiste jugar : " +  jugadas)
for (let i=0; i< jugadas; i++){
    let jugador = prompt("Elige: piedra, papel, tijera" );
    let piedra=0;
    let papel=1;
    let tijera=2;





    let maquina= Math.floor(Math.random()*3);

    if (jugador ==="piedra" && maquina ===0  ){ 
        alert("El computador eligio *🏔 piedra* = Empate 😐")
        empate= empate + 1;
        

    }else if (jugador === "papel" && maquina ===0 ){
        
        alert("El computador eligio * 🏔 piedra* = Ganaste 😄")
        usuario=usuario+1;
        

    }else if (jugador === "tijera" && maquina ===0  ){
        
        alert("El computador eligio *🏔 piedra* = Perdiste 😥")
        pc= pc+1;
        

    }else if (jugador === "piedra" && maquina ===1  ){
        
        alert("El computador eligio *🧻papel* = Perdiste 😥")
        pc= pc+1;
        

    }else if (jugador === "papel" && maquina ===1  ){
        
        alert("El computador eligio *🧻 papel* = Empate 😐")
        empate= empate + 1;
        

    }else if (jugador === "tijera" && maquina ===1 ){
        
        alert("El computador eligio *🧻 papel* = Ganaste 😄")
        usuario=usuario+1;
        

    }else if (jugador === "piedra" && maquina ===2  ){
        
        alert("El computador eligio *✂ tijera* = Ganaste 😄")
        usuario=usuario+1;
        

    }else if (jugador === "papel" && maquina ===2 ){
        
        alert("El computador eligio *✂ tijera* = Perdiste 😥")
        pc= pc+1;
        

    }else if (jugador === "tijera" && maquina ===2  ){
       
        alert("El computador eligio *✂ tijera* = Empate 😐")
        empate= empate + 1;
        }


    }
    

        if  (usuario > pc){
           alert("tu ganaste  🎉🥳");
        }

       else if (pc > usuario){
           alert("Tu perdiste  😭😭");
       }

       else {
           alert("es un empate 😶");
       }
   


