const corpo = document.getElementsByTagName('body')
const div = document.getElementById('area')

div.addEventListener('click', clicar)
div.addEventListener('mouseup', soltou)
div.addEventListener('dblclick', dois)
div.addEventListener('mouseout', sair)
div.addEventListener('mouseenter', entrar)

function clicar(){
    div.innerText = 'clicou!'
    div.style.background = 'rgb(27,98,78)'
}

function entrar(){
    div.innerText = 'entrou!'
    div.style.background = 'blue'
}

function sair(){
    div.innerText = 'saiu...'
    div.style.background = 'red'

}

function dois(){
    div.style.background = 'purple'
    div.innerText = 'clicou duas vezes'
}

function soltou(){
    div.style.background = 'pink'
    div.innerText = 'soltou'
}