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

const soma = idade2 + contribuicao

if (sexo2 == 'M'){
    if (contribuicao >= 35){
        if (soma >= 95){
            console.log(`${nome2}, você pode se aposentar.`)
        }else{
            console.log(`${nome2}, você não pode se aposentar.`)
        }
    }else{
        console.log(`${nome2}, você não pode se aposentar.`)
    }
}else if (sexo2 = 'F'){
    if (contribuicao >= 30){
        if (soma >= 85){
            console.log(`${nome2}, você pode se aposentar.`)
        }else{
            console.log(`${nome2}, você não pode se aposentar.`)
        }
    }else{
        console.log(`${nome2}, você não pode se aposentar.`)
    }
}