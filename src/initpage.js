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
    const $menu = document.createElement('div')
    $menu.id = 'menu'
    $menu.textContent = 'Menu'
    const $contact = document.createElement('div')
    $contact.id = 'contact'
    $contact.textContent = 'Contact'
    $options.appendChild($home)
    $options.appendChild($menu)
    $options.appendChild($contact)
    const $maincontent = document.createElement('div')
    $maincontent.id = 'maincontent'
    $main.appendChild($maincontent)
}

export{ initPage}



//     <div id="home">Home</div>
//     <div id="menu">menu</div>
//     <div id="contact"> contact</div>
// </div>
// </div>
// </div>