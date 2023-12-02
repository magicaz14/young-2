const questoes_quiz = [
    {
        questao: 'Melhor professor',
        a: 'Daniel',
        b: 'Rodrigo',
        c: 'Diego',
        d: 'Arthur',
        correta: 'c'
    },
    {
        questao: 'Melhor fruta',
        a: 'Uva',
        b: 'maça',
        c: 'Banana',
        d: 'Melancia',
        correta: 'd'
    },
    {
        questao: 'Melhor jogo',
        a: 'Diablo',
        b: 'LOL',
        c: 'Rainbow six',
        d: 'vava',
        correta: 'c'
    },
    {
        questao: 'Melhor Time ',
        a: 'Timão (Corinthians)',
        b: 'Real madrid',
        c: 'Manchester city',
        d: 'Barcelona',
        correta: 'a'
    },
    {
        questao: 'Melhor Defensor R6',
        a: 'Mozzie',
        b: 'Vigil',
        c: 'Caveira',
        d: 'castle',
        correta: 'a'
    }
]

// identidicando elementos
const titulo_quiz = document.querySelector('.titulo-questao')
const conteiner_quiz = document.querySelector('.conteiner-quiz')
const resposta = document.querySelectorAll('resposta')

const alternativa_A = document.getElementById('texto-a')
const alternativa_B = document.getElementById('texto-b')
const alternativa_C = document.getElementById('texto-c')
const alternativa_D = document.getElementById('texto-d')
const botao = document.getElementById('enviar')

// Variaveis importantes
let questao_atual = 0
let qtd_corretas = 0 

// iniciar quiz
// mostrar questoes
function carregar_questoes(){
    const QUESTAO = questoes_quiz[questao_atual]
    titulo_quiz.innerHTML = QUESTAO.questao
    alternativa_A.innerHTML = QUESTAO.a
    alternativa_B.innerHTML = QUESTAO.b
    alternativa_C.innerHTML = QUESTAO.c
    alternativa_D.innerHTML = QUESTAO.d
    

}
carregar_questoes()

// click do botao
