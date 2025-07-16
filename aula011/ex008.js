var vel = 29

if (vel < 30) {
    console.log(`A velocidade do seu carro é de ${vel} km/h`)
    console.log(`Você está a baixo da velocidade mínima permitida de 30km/h. MULTADO!`)
}
else if (vel >= 30 && vel <= 60) {
    console.log(`A velocidade do seu carro é de ${vel} km/h`)
    console.log(`Você está dentro da velocidade permitida. Dirija sempre usando cento de segurança!`)
}else{
    console.log(`A velocidade do seu carro é de ${vel} km/h`)
    console.log(`VocÊ ultrapassou a velocidade permitida de 60km/h! MULTADO`)}

