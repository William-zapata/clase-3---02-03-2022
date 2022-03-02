let resultado = document.getElementById("resEj1")
let horas , total , valor_hora 
function leerdatos(){
    horas = Number(prompt("ingrese cantidad de horas"))
}
leerdatos()
console.log(calculadora(horas))
function calculadora(horas) {
    if (horas<= 40) {
        valor_hora = 20000
        total = valor_hora * horas
    }
    else if (horas > 40 ) {
valor_hora = 20000
total = ( 20000 * 40) + ((horas-40) * 30000)
    } 
    else
return total
    } 
    console.log(total)
    alert(total) 
    








