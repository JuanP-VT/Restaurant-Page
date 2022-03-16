import { menu } from "./menu.mod"
import {home} from './home.mod'
import {contact} from './contact.mod'
function loadEventsListeners(){
const $home = document.querySelector('#home')
const $menu = document.querySelector('#menu')
const $contact = document.querySelector('#contact')

$home.addEventListener('click', home)
$menu.addEventListener('click',menu)
$contact.addEventListener('click',contact)
}


export {loadEventsListeners}
