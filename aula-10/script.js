const nome_input = document.getElementById('nome_input')
const num1 = document.getElementById('n1_input')
const num2 = document.getElementById('n2_input')
const num3 = document.getElementById('n3_input')

const nome_saida = document.getElementById('nome')
const media_saida = document.getElementById('media')
const resultado_saida = document.getElementById('resultado')
const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) =>})

function media(){
   let n1 = parseInt(num1.value)
   let n2 = parseInt(num2.value)
   let n3 = parseInt(num3.value)

    return n1 + n2 + n3 
}

let x = media()
console.log(x)