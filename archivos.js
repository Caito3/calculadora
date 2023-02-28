
var array = []
var arrayCuenta = [] 
var arrayOp = []
var arrayUnion = []


var res = 0 

var a = 0  

//Con esta funcion hacemos que se muestren por pantalla los numeros ingresados y los guardamos en un array para luego utilizar 
function botones(x){
    arrayUnion.push(x)
    
    a += x 
    var totalTexto = document.getElementById("totalTexto")
    totalTexto.innerHTML=a
    

}
//Pasamos los datos del array a tipo numericos y agregamos los operadores seleccionados en otro array
function op(x){
    a = 0 
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
    var a = 0
    var op = 0
    var i = 0
    var contador = 0 
    var mantenerRes = 1
    var mantener = []
    var aaa = 0 

    for (op = 0; op < arrayOp.length; op++){
        contador = 0 
        //Hacemos la suma en caso de que el operador sea +
        if (arrayOp[op] == "+"){
        
        while(a < arrayCuenta.length  ){
            
            res += arrayCuenta[a]
            
            i++
            a++
            contador++
            if (contador >= 2){
                break
            }
    }
    //Hacemos la resta en caso que el operador sea -
    }
        if(arrayOp[op] == "-"){
            contador = 0 
        while (a < arrayCuenta.length ){

            res = -res - arrayCuenta[a]
            i++
            a++
            contador++
            
            if(contador >= 2){
                break}
            }
    }









    //Hacemos la multiplicacion en caso que el operador sea x
    if (arrayOp[op] == "x"){
        contador = 0 
        mantener = arrayCuenta.filter(number => number > 0)
        while(a < mantener.length ){
            
            mantenerRes *= mantener[a]
            
            res = mantenerRes
            
            i++
            a++
            contador++
            if (contador >= 2){
                break
            }
        }
    
    }
    
    //Hacemos la division en caso que el operador sea /
    if (arrayOp[op] == "/"){
        contador = 0 
        mantener = arrayCuenta.filter(number => number > 0)
        
        while(a < mantener.length ){


            mantenerRes = mantener[a]
                
            if ( aaa < 1){
            res = mantenerRes
        }
            else {

                res /= mantenerRes 
            }

            i++
            a++
            contador++
            aaa++

            if (contador >= 2){
                break
            }
        }
    }

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
    a = a.slice(0 , a.length - 1)





    res.innerHTML=a
}