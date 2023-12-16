const CEP = document.getElementById('cep')
const FORM = document.querySelector('.conteudo-geral')
const estado = document.getElementById('estado')
const cidade = document.getElementById('cidade')
const bairro = document.getElementById('bairro')
const rua = document.getElementById('rua')

const buscar_cep = async (cep) =>{
    resposta = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)

    if (resposta.status === 400){
        window.alert('CEP invalido');
        CEP.value = ''
    }
    else if (resposta.status === 404){
        window.alert('CEP não encontrado');
        CEP.value = ''
    } else if (resposta.status === 200){
        const info = resposta.json()
        return info
    }
}
const mostrar_cep =  async (cep) =>{
    const json_cep = await buscar_cep(cep)
    if (json_cep){
       estado.innerHTML = json_cep.state
       cidade.innerHTML = json_cep.city
       bairro.innerHTML = json_cep.district
       rua.innerHTML = json_cep.address
       CEP.value = ''
    }
}



FORM.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    let cep = CEP.value
    console.log(cep)
    mostrar_cep(cep)
})




