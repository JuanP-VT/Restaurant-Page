import {deleteContent} from './deleteContent'
import phoneIcon from './img/phone.png'
import locationIcon from './img/location.png'
function contact(){
    console.log('contact')
    deleteContent()
    const $pagemain = document.createElement('div')
    const $main = document.querySelector('#maincontent')
    $main.appendChild($pagemain)
    $pagemain.id = 'pagemain'
    const $contacttitle = document.createElement('div')
    $contacttitle.textContent = 'Contacto'
    $contacttitle.classList.add('title')
    $pagemain.appendChild($contacttitle)
    const $phone = document.createElement('div')
    $phone.classList.add('info')
    $pagemain.appendChild($phone)

    const myImage = new Image();
    myImage.src = phoneIcon
    myImage.classList.add('icon')
    $phone.appendChild(myImage)
    const phoneNumber = document.createElement('div')
    phoneNumber.classList.add('text')
    phoneNumber.textContent = '+52 668 xx1 C123'
    $phone.appendChild(phoneNumber)

    const locationImg = new Image();
    locationImg.src =locationIcon
    locationImg.classList.add('icon')
    const $phone2 = document.createElement('div')
    $phone2.classList.add('info')
    $pagemain.appendChild($phone2)
    $phone2.appendChild(locationImg)
    const location = document.createElement('div')
    location.classList.add('text')
    location.textContent = 'Avenida Siempre Viva'
    $phone2.appendChild(location)
}

export {contact}