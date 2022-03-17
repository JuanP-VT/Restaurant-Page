import { deleteContent } from "./deleteContent"
import { menu } from "./menu.mod";
function home(){
    deleteContent();
    console.log('home')
    const $maincontent = document.querySelector('#maincontent')
    const $homemain = document.createElement('div')
    $homemain.id = 'homemain'
    const $homeWelcome = document.createElement('div')
    $homeWelcome.id = 'homewelcome'
    $homeWelcome.textContent = 'Bienvenidos'
    const $hometitle = document.createElement('div')
    $hometitle.id = 'hometitle'
    $hometitle.textContent = 'Panaderia el Sabroso!'
    const $text = document.createElement('p')
    $text.classList.add('text')
    $text.textContent = 'Sienta la gloria eterna con solo un mordisco del irresistible manjar de Pandaeria del Sabroso!'
    const $toMenu = document.createElement('btn')
    $toMenu.textContent = 'Ver Menu'
    $toMenu.addEventListener('click',menu)


    $maincontent.appendChild($homemain)
    $homemain.appendChild($homeWelcome)
    $homemain.appendChild($hometitle)
    $homemain.appendChild($text)
    $homemain.appendChild($toMenu)
}


export{home}