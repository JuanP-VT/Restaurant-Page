import gitImage from './img/git.png'

//Creates DOM header
function initPage(){
    //Header
    const $header = document.createElement('div')
    $header.id = 'header'
    const $headertitle = document.createElement('div')
    $headertitle.id = 'headertitle'
    $headertitle.textContent = 'Panaderia el Sabroso!'
    const $options = document.createElement('div')
    $options.id = 'options'
    const $main = document.querySelector('#main')
    $main.appendChild($header)
    $header.appendChild($headertitle)
    $header.appendChild($options)
    const $home = document.createElement('div')
    $home.id = 'home'
    $home.textContent = 'Home'
    $home.classList.add('tab')
    const $menu = document.createElement('div')
    $menu.id = 'menu'
    $menu.textContent = 'Menu'
    $menu.classList.add('tab')
    const $contact = document.createElement('div')
    $contact.id = 'contact'
    $contact.classList.add('tab')
    $contact.textContent = 'Contact'
    $options.appendChild($home)
    $options.appendChild($menu)
    $options.appendChild($contact)
    //Body
    const $maincontent = document.createElement('div')
    $maincontent.id = 'maincontent'
    $main.appendChild($maincontent)
    //Footer
    const $footer = document.createElement('div')
    $footer.id = 'footer'
    $main.appendChild($footer)
    const $footerBox = document.createElement('div')
    $footer.appendChild($footerBox)

    const myImage = new Image();
    myImage.src = gitImage
    myImage.id = 'git'
    $footerBox.id = 'footerbox'
    $footerBox.append(myImage)
    const $footertext = document.createElement('div')
    $footertext.textContent = 'Project by JuanP'
    $footer.appendChild($footertext)
    $footer.appendChild($footer)
}

export{ initPage}
