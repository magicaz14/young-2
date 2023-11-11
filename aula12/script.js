// IDENTIFICAR OS ELEMENTOS
const dias_el = document.querySelector('.dias')
const horas_el = document.querySelector('.horas')
const minutos_el = document.querySelector('.minutos')
const segundos_el = document.querySelector('.segundos')

// DEFINIR UMA DATA
const data_niver = '09 april 2024'

//LÓGICA PARA MOSTRAR A DIFERENÇA ENTRE DATAS 
function contagem(){
    const data_formatada = new Date(data_niver)
    const data_atual = new Date()
    const total_segundos = (data_formatada - data_atual) /1000

    // OBTER AS VALORES
    let dias = Math.floor(total_segundos / 86400)
    let horas = Math.floor(total_segundos / 3600) %24
    let minutos = Math.floor(total_segundos / 60) %60
    let segundos = Math.floor(total_segundos)%60

    // MOSTRAR NO CONSOLE
    console.log( dias, horas, minutos, segundos)

    // INSERIR VALORES NOS ELEMENTOS
    dias_el.innerHTML = dias
    horas_el.innerHTML = horas
    minutos_el.innerHTML = minutos
    segundos_el.innerHTML = segundos
}

contagem()

// COMO ATULIZAR A PAGINA SEGUNDO A SEGUNDO

// DEIXAR O NUMERO COM DOIS DIGITOS 

// TORNAR DINÂMINCO A DATA DO ALVO