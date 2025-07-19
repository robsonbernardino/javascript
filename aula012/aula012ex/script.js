
function carregar(){
var msg = document.querySelector('#msg')
var img = document.querySelector('#imgfoto')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora}h${minutos}m`

if (hora >= 5 && hora < 12 ) {
    // bom dia
    img.src = 'imagens/manhã.png'
    document.body.style.background = '#e1c997ff'
    
} else if (hora >=12 && hora < 18) {
    //boa tarde
    img.src = 'imagens/tarde.png'
    document.body.style.backgroundImage = 'linear-gradient(to top, #FFF271, #FF8F00)'
} else{
    //boa noite
    img.src = 'imagens/noite.png'
    document.body.style.backgroundImage = 'linear-gradient(to bottom, #000503, #354F53)'
}
}



