

// let resposta = window.prompt('digite um numero')
// let num = resposta%2

// if (num==0){
// document.write(resposta, " é par")
// }
// else if(num>0){
// document.write(resposta, " é impar")
// }
// else {
// document.write("'", resposta, "'", " Não é um Número")
// }


// let num1 = window.prompt('digite um numero')
// let num2 = window.prompt('digite outro número')
// let soma = parseInt(num1)+parseInt(num2);

// if (soma == 'NaN'){
// document.write('as informações que vc digitou não são números')
// }
// else{
//  document.write('A soma de ', num1, ' com  ', num2, ' é igual a: ', soma)
// }

let num1 = window.prompt('digite um numero')
let i = 0

for (let i = 0; i<9; i++){
i = i
let tabu = parseInt(num1)*i
document.write(tabu )
}
