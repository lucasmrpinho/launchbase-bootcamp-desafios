const user = {
    name: 'Lucas',
    transactions: [],
    balance: 0
}

// Adicionar transações - Desafio 1-4.1 :

function createTransaction(transaction){
    user.transactions.push(transaction)
    if (transaction.type == 'credit'){
        user.balance += transaction.value
    }
    else{
        user.balance -= transaction.value
    } 
}


// Relatórios :
console.log('Desafio 1-4.2 :')

function getHigherTransactionByType(type){
    let higherValue = 0
    let higherTransaction
    for (let transaction of user.transactions){
        if (transaction.type == type){
            if (higherValue < transaction.value){
                higherValue = transaction.value
                higherTransaction = transaction
            }
        }
    }
    return higherTransaction
}

function getAverageTransactionValue(){
    let sum = 0
    for (let transaction of user.transactions){
        sum += transaction.value
    }
    return sum / user.transactions.length
}

function getTransactionsCount(){
    let count = {credit: 0, debit: 0}
    let credit = 0
    let debit = 0
    for (let transaction of user.transactions){
        if (transaction.type == 'credit'){
            credit += 1
        }
        else{
            debit += 1
        }
        
    }
    return count = {credit: credit, debit: debit}
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log("User balance: " + user.balance); // 60

const higherCredit = getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
const higherDebit = getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

console.log("User higher credit transaction: " + JSON.stringify(higherCredit))
console.log("User higher debit transaction: " + JSON.stringify(higherDebit))

const avarage = getAverageTransactionValue(); // 70

console.log("User avarage transaction value: " + avarage);

const count = getTransactionsCount(); // { credit: 2, debit: 2 }

console.log("User transaction types count: " + JSON.stringify(count))