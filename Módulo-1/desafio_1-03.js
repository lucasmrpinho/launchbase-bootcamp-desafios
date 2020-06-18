// Usuários e tecnologias
console.log('Desafio 1-3.1 :')

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function exibeUsuarios(usuarios){
    for (let usuario of usuarios){
        console.log(`O usuario ${usuario.nome}, trabalha com ${usuario.tecnologias.join(', ')}`)
    }
}

exibeUsuarios(usuarios)

// Busca por tecnologia ( CSS )
console.log('Desafio 1-3.2 :')

function checaSeUsuarioUsaCSS(usuario){
    for(let tec of usuario.tecnologias){
        if (tec == "CSS"){
            return true
        }
    }
    return false
}

for(let usuario of usuarios){
    const usa = checaSeUsuarioUsaCSS(usuario)
    if (usa){
        console.log(`O usuario ${usuario.nome}, trabalha com CSS`)
    }
}

//Soma de despesas e receitas
console.log('Desafio 1-3.3 :')

const saldoUsuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
];

function somaNumeros(numeros) {
    let soma = 0
    for(let num of numeros){
        soma = soma + num
    }
    return soma
}

function calculaSaldo(receitas, despesas) {
    let receita = somaNumeros(receitas)
    let despesa = somaNumeros(despesas)
    return receita - despesa
}

for(let usuario of saldoUsuarios){
    let saldo = calculaSaldo(usuario.receitas, usuario.despesas)
    if(saldo > 0){
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    }
    else{
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}



