//Creates DOM header
function initPage(){
    const $header = document.createElement('div')
    $header.id = 'header'
    const $headertitle = document.createElement('div')
    $headertitle.id = 'headertitle'
    $headertitle.textContent = 'Header'
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
    const $maincontent = document.createElement('div')
    $maincontent.id = 'maincontent'
    $main.appendChild($maincontent)
    const $footer = document.createElement('div')
    $footer.id = 'footer'
    $main.appendChild($footer)
}

export{ initPage}

