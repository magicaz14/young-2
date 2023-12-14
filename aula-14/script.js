const NAME_POKE = document.querySelector('.name_poke')
const NUMBER_POKE = document.querySelector('.num_poke')
const IMG_POKE = document.querySelector('.poke-img')
const FORM = document.querySelector('.forms')
const INPUT = document.querySelector('.input_search')
const PREV_BTN = document.querySelector('.pre_btn')
const NEXT_BNT = document.querySelector('.next-btn')

let id_pokemon = 1

const buscar_pokemon = async (pokemon) =>{
    resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(resposta)
    if (resposta.status === 200){
        const info = resposta.json()
        return info
    }
}
const mostrar_pokemon = async (pokemon) =>{
    const json_pokemon = await buscar_pokemon(pokemon)
    if (json_pokemon){
        IMG_POKE.src = json_pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        IMG_POKE.style.display = 'block'
        NAME_POKE.innerHTML = json_pokemon.name
        NUMBER_POKE.innerHTML = json_pokemon.id
        id_pokemon = json_pokemon.id
        INPUT.value = ''
    }
    else{
        IMG_POKE.style.display = 'none'
        NAME_POKE.innerHTML = 'not Founded'
        NUMBER_POKE.innerHTML =''
    }
}

FORM.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    let pokemon = INPUT.value.toLowerCase()
    mostrar_pokemon(pokemon)
})

PREV_BTN.addEventListener('click', ()=>{
    if (id_pokemon > 1){
        id_pokemon -= 1
        mostrar_pokemon(id_pokemon)
    }
})

NEXT_BNT.addEventListener('click', () =>{
    id_pokemon +=1
    mostrar_pokemon(id_pokemon)
})
mostrar_pokemon('id_pokemon')