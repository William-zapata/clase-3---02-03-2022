const valor_matricula = 900000
let creditos, descuento, totalm;
function leerdatos() {
    creditos = Number(prompt("ingrese cantidad de creditos"))
}
leerdatos()
console.log(calculadora(creditos))
function calculadora(creditos) {
    if (creditos <= 6) {
        descuento = valor_matricula * 0.5;
    }
    else if (creditos > 6 || creditos <= 10) {
descuento = valor_matricula *0.25
    } 
    else if(creditos > 10) {
        descuento = 0; 
    } else {
        alert("opcion no valida")
    }
    totalm = valor_matricula - descuento 
    return totalm 
}
console.log(totalm)
alert(totalm)








