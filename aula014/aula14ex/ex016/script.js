

function contar () {

    var ini = Number(document.querySelector('#ini').value)
    var fim = Number(document.querySelector('#fim').value)
    var passo= Number(document.querySelector('#passo').value)
    var res = document.querySelector('#res')
    res.innerHTML = ''

    if (passo <= 0) {
        alert(`Passo inválido! Considrando Passo 1`)
        passo = 1
        }

    while (ini <= fim){
    res.innerHTML += ` ${ini} 👉`
    ini +=passo
    }
    res.innerHTML += '🏳️' 
}
