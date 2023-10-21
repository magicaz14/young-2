const nome_input = document.getElementById('nome_input')
const num1 = document.getElementById('n1_input')
const num2 = document.getElementById('n2_input')
const num3 = document.getElementById('n3_input')

const nome_saida = document.getElementById('nome')
const media_saida = document.getElementById('media')
const resultado_saida = document.getElementById('resultado')
const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) =>{
    e.preventDefault()

    console.log(media())
})

function media(){

    let nome = nome_input.value
    let n1 = parseInt(num1.value)
    let n2 = parseInt(num2.value)
    let n3 = parseInt(num3.value)

    // localStorage.setItem('nome', nome)
    // localStorage.setItem('n1', n1)
    // localStorage.setItem('n2', n2)
    // localStorage.setItem('n3', n3)
    
    let resultado = (n1 + n2 + n3) / 3
    nome_saida.innerHTML = nome
    media_saida.innerHTML = resultado

    if (resultado >= 7){
        resultado_saida.innerHTML = 'aprovado'
    }
    else if (resultado_saida <= 4)
        resultado_saida.innerHTML = 'reprovado'
    else{
        resultado_saida.innerHTML = 'recuperação'
    }

}

