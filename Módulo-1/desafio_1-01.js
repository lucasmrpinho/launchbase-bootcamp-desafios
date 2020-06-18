// Cálculo do IMC
console.log('Desafio 1-2.1 :')

const nome = 'Lucas'
const idade = '19'
const peso = 50.0
const altura = 1.70
const sexo = 'M'

const imc = peso / ( altura * altura )

let message = ""

if (imc >= 30){
    message = `${nome}, você está acima do peso.`
}else{
    message = `${nome}, você está abaixo do peso.`
}

console.log(message)

// Cálculo de aposentadoria
console.log('Desafio 1-2.2 :')

const nome2 = 'João'
const idade2 = 50
const sexo2 = 'M'
const contribuicao = 30

const calculoContribuicao = idade2 + contribuicao

const homemPodeAposentar = sexo2 == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo2 == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if ( homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome2}, você pode se aposentar!`)
} else {
    console.log(`${nome2}, você não pode se aposentar!`)
}