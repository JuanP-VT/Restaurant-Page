function deleteContent(){
    const $main = document.querySelector('#maincontent')
    while ($main.firstChild){
        $main.removeChild($main.firstChild)
    }

}

export {deleteContent}