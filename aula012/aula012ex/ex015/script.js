function verificar(){
    //window.alert('O botão está funcionando!')
    const input = document.getElementById('txtdata')
    const res = document.getElementById('res')

    if (input.value ===''){
        alert('[ERRO] Preencha a data corretamente!')
        return
    }

    const dataNasc = new Date(input.value)
    const hoje = new Date()

    let idade = hoje.getFullYear() - dataNasc.getFullYear()
    let idadeMes = hoje.getMonth() - dataNasc.getMonth()
    let idadeDia = hoje.getDay() - dataNasc.getDay()
    const mesAtual = hoje.getMonth()
    const diaAtual = hoje.getDay()

    const mesNasc = dataNasc.getMonth()
    const diaNasc = dataNasc.getDay()
    
    // Ajuste para casos em que o mês ou o dia ainda não chegou
  if (idadeDia < 0) {
    idadeMes--
    const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate()
    idadeDia += ultimoDiaMesAnterior
  }

  if (idadeMes < 0) {
    idade--
    idadeMes += 12
  }
    var fsex = document.getElementsByName('radsex')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')


  var gênero = ''
        if (fsex[1].checked) {
            gênero = 'Mulher' 
            if(idade >=0 && idade <10){
                //Criança
                img.setAttribute('src', 'imagem/foto-bebe-f.png')
            }
            else if( idade < 21){
                //Mulher jovem
                img.setAttribute('src', 'imagem/foto-jovem-f.png')
            }
            else if(idade < 50){
                //Mulher adulto
                img.setAttribute('src', 'imagem/foto-mulher.png')
            }
            else{
                //Mulher idoso
                img.setAttribute('src', 'imagem/foto-idosa.png')
            }                 
        } else { 
            gênero = 'Homem'  
            if(idade >=0 && idade <10){
                //Criança
                img.setAttribute('src', 'imagem/foto-bebe-h.png')
            }
            else if( idade < 21){
                //jovem
                img.setAttribute('src', 'imagem/foto-jovem-m.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagem/foto-homem.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagem/foto-idoso.png')
            }
        }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com <strong>${idade} anos</strong> ${idadeMes} Meses e ${idadeDia} Dias.`
    res.appendChild(img)
    
}



    



/*var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('#res')
    if (fAno.value.length == 0 || fAno.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var dataNasc = new Date(input.value)

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        const mesAtual = ano.getMonth()


        var gênero = ''
        if (fsex[1].checked) {
            gênero = 'Mulher'                  
        } else { 
            gênero = 'Homem'            
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }*/