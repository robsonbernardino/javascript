var idade = 66
console.log(`Você tem ${idade} anos de idade`)
if (idade < 16 ) {
    console.log(`Você não vota!`)
} 
else if (idade < 18 || idade > 65 ){
    console.log(`Seu voto é Opcional!`)
}
else{
    console.log(`Você vota!`)
}