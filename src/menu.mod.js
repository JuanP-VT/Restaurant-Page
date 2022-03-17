import {deleteContent} from './deleteContent'
function menu(){
    deleteContent()
    const $mainpage = document.createElement('div')
    $mainpage.id = 'pagemain'
    const $maincontent = document.querySelector('#maincontent')
    $maincontent.appendChild($mainpage)
    const $menu = document.createElement('div')
    $menu.textContent = 'MENU'
    $menu.id = 'menuTitle'
    $mainpage.appendChild($menu)
    
    const card1 = document.createElement('div')
    card1.classList.add('card')
    const p1 = document.createElement('p')
    p1.classList.add('highlight')
    p1.textContent = 'Pan de Mujer'
    card1.appendChild(p1)
    const sampleTxt = document.createElement('p')
    sampleTxt.textContent ='lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet'
    card1.appendChild(sampleTxt)
    const price = document.createElement('p')
    price.classList.add('highlight')
    price.textContent = '20$'
    card1.appendChild(price)

    const card2 = document.createElement('div')
    card2.classList.add('card')
    const p2 = document.createElement('p')
    p2.classList.add('highlight')
    p2.textContent = 'Coricos'
    card2.appendChild(p2)
    const sampleTxt2 = document.createElement('p')
    sampleTxt2.textContent ='lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet'
    card2.appendChild(sampleTxt2)
    const price2 = document.createElement('p')
    price2.classList.add('highlight')
    price2.textContent = '15$'
    card2.appendChild(price2)



    const card3 = document.createElement('div')
    card3.classList.add('card')
    const p3 = document.createElement('p')
    p3.classList.add('highlight')
    p3.textContent = 'Empanadas Goddess'
    card3.appendChild(p3)
    const sampleTxt3 = document.createElement('p')
    sampleTxt3.textContent ='lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet'
    card3.appendChild(sampleTxt3)
    const price3 = document.createElement('p')
    price3.classList.add('highlight')
    price3.textContent = '15$'
    card3.appendChild(price3)


    const card4 = document.createElement('div')
    card4.classList.add('card')
    const p4 = document.createElement('p')
    p4.classList.add('highlight')
    p4.textContent = 'Coricos'
    card4.appendChild(p4)
    const sampleTxt4 = document.createElement('p')
    sampleTxt4.textContent ='lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet'
    card4.appendChild(sampleTxt4)
    const price4 = document.createElement('p')
    price4.classList.add('highlight')
    price4.textContent = '15$'
    card4.appendChild(price4)

    const card5 = document.createElement('div')
    card5.classList.add('card')


    $mainpage.appendChild(card1)
    $mainpage.appendChild(card2)
    $mainpage.appendChild(card3)
    $mainpage.appendChild(card4)
    $mainpage.appendChild(card5)


}

export {menu}