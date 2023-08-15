const play = document.querySelector(".play_but")
const menu = document.querySelector(".menu")
const game = document.querySelector(".game")

play.addEventListener('click', ()=>{
    game.classList.remove('game')
    game.classList.add('game_after')
    menu.classList.remove('menu')
    menu.classList.add('menu_after')
    console.log('xd')
})