

var array = []
var arrayCuenta = [] 
var arrayOp = []
var arrayUnion = []


var res = 0 
var aaa = 0 
var aa = 0  
var a = 0 
var mantenerRes = 1
var op = 0 
//Con esta funcion hacemos que se muestren por pantalla los numeros ingresados y los guardamos en un array para luego utilizar 
function botones(x){
    arrayUnion.push(x)
    
    aa += x 
    var totalTexto = document.getElementById("totalTexto")
    totalTexto.innerHTML=aa
    

}
//Pasamos los datos del array a tipo numericos y agregamos los operadores seleccionados en otro array
function operadores(x){
    aa = 0 
    var totalPrimero = arrayUnion.join('')
    array.push(totalPrimero)
    var total = array.join('')
    var total = Number(total)
    arrayCuenta.push(total)
    arrayOp.push(x)
arrayUnion = []
array = []
    
}
//La funcion que sigue hace que recorramos los arrays y empezemos a realizar las operaciones 
function hacerCuenta(){
    
    
    var i = 0
    var contador = 0 
    var mantener = []
    
    
    arrayOp = arrayOp.filter(number => number != 3)
    for (op = 0; op < arrayOp.length; op++){
        
        contador = 0 
        //Hacemos la suma en caso de que el operador sea +
        if (arrayOp[op] == "+"){
            
            arrayCuenta = arrayCuenta.filter(number => number > 0)
        while (a < arrayCuenta.length  ){
            
            res += arrayCuenta[a]
            
            i++
            a++
            contador++
            
            if (contador >= 2){
                
                break
            }
    }
        }
    //Hacemos la resta en caso que el operador sea -

        if(arrayOp[op] == "-"){
            contador = 0 
            arrayCuenta = arrayCuenta.filter(number => number > 0)
            
        while (a < arrayCuenta.length ){
            if( a > 1){
            res = res - arrayCuenta[a]
            i++
            a++
            contador++
            }
            else{
            res = -res - arrayCuenta[a]
            i++
            a++
            contador++
            }
            if(contador >= 2){
                break}
            }
    }
    //Hacemos la multiplicacion en caso que el operador sea x
    if (arrayOp[op] === "x"){
        
        contador = 0 
        mantener = arrayCuenta.filter(number => number > 0)
        while(a < mantener.length ){
            
            res *= mantener[a]
            
            i++
            a++
            contador++
            if (contador >= 2){
                break
            }
        }
    
    }
    
    //Hacemos la division en caso que el operador sea /
    if (arrayOp[op] === "/"){
        contador = 0 
        mantener = arrayCuenta.filter(number => number > 0)
        
        while(a < mantener.length ){

            mantenerRes = mantener[a]
                
            if ( a < 1){
            
            res = mantenerRes
            
        }
            else {
                
                res /= mantenerRes 
            }

            i++
            a++
            contador++

            if (contador >= 2){
                break
            }
        }
    }
arrayOp[op] = "3"
    }
}
//Mostramos los resultados de las operaciones 
function hacer() {
    var hacer = document.getElementById("totalTexto")
    hacer.innerHTML = res
}
//boton de resetear
function limpiar (){
    window.location.reload()
}
//boton de delete 
function borrar(){

    arrayUnion.pop()
    if( arrayCuenta.length > 0 ){
        arrayCuenta.pop()
    }
    var res = document.getElementById("totalTexto")
    aa = aa.slice(0 , aa.length - 1)





    res.innerHTML=aa
}