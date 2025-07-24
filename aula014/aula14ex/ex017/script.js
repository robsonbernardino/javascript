function gerar() {
var num = Number(document.querySelector('#numero').value)
var res = document.querySelector('#res')

 if (num === 0 && document.querySelector('#num').value === '') {
        alert('Por favor, digite um número!')
        return
 }

 res.value = ''

 for (let i =1; i<=10; i++){
    res.value += `${num} x ${i} = ${num * i} \n`
 }


}