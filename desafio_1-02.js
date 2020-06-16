// Contrução e impressão de objetos
console.log('Desafio 1-1.1 :')
const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Progamação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}

const message = `A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, número ${empresa.endereco.numero}.`

console.log(message)

// Vetores e objetos
console.log('Desafio 1-1.2 :')

const dev = {
    nome: 'Lucas',
    idade: 19,
    tecnologias: [

    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }

    ]
}

const message2 = `O usuário ${dev.nome} de ${dev.idade} anos utiliza a tecnologia ${dev.tecnologias[0].nome}, tendo como especialidade ${dev.tecnologias[0].especialidade}.`

console.log(message2)