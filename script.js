
function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `<strong>Agora são ${hora} Horas.</strong>`

if(hora >= 0 && hora < 12 ) {
    img.src = 'img/manha.png'
    document.body.style.background = '#fad3ac'
}else if (hora >= 12 && hora <= 18) {
    img.src = 'img/tarde.png'
    document.body.style.background = '#ed7828'
}
else {
    img.src = 'img/noite.png'
    document.body.style.background = '#0a212f'
}

}
    


