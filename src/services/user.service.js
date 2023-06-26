import { utilService } from "./util.service.js"

const userDB = 'userDB'
var gUser

const user = {
    name: "Puki Ben David",
    balance: 100,
    transactions: []
}

export const userService = {
    getUser,
    signup,
    // logout,
    transferFunds,
    getTransactions,
}

function getUser() {
    if (gUser) return gUser
    return user
}

function signup(newName){
    gUser = utilService.loadFromStorage(userDB) || null
    if (gUser === null || gUser.name !== newName) {
        gUser = {name: newName, balance: 100, transactions: []}
        utilService.saveToStorage(userDB, gUser)
    }
    return gUser
}

// function logout(){
//     gUser = null
// }

function transferFunds(transfer){
    console.log('gUser:', gUser)
    gUser.transactions.push(transfer)
    gUser.balance -= transfer.amount
    console.log('gUser:', gUser)
    utilService.saveToStorage(userDB, gUser)
}

function getTransactions(){
    return gUser.transactions
}