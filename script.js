let nameHero = prompt("Olá, viajante!\n\nQual o seu nome?")
let wins = prompt
            ("Quantas vitórias você possui?\n")
let losses = prompt
            ("E quantas derrotas você possui?\n")

let balance = rank(wins, losses)

function rank(wins, losses){
    let balance = wins - losses
    return balance
}

function getRank(wins){
    if(wins <= 10 ){
        let resultFerro = alert(`O Herói ${nameHero} tem de saldo de ${balance} está no nível Ferro`)
        return resultBronze
    }else if (wins >= 11 && wins <= 20) {
        let resultBronze = alert(`O Herói ${nameHero} tem de saldo de ${balance} está no nível Bronze`)
        return resultBronze
    }else if (wins >= 21 && wins <= 50) {
        let resultPrata = alert(`O Herói ${nameHero} tem de saldo de ${balance} está no nível Prata`)
        return resultPrata
    }else if (wins >= 51 && wins <= 80) {
        let resultOuro = alert(`O Herói ${nameHero} tem de saldo de ${balance} está no nível Ouro`)
        return resultOuro
    }else if (wins >= 81 && wins <= 90) {
        let resultDiamante = alert(`O Herói ${nameHero} tem de saldo de ${balance} está no nível Diamante`)
        return resultDiamante
    }else if (wins >= 91 && wins <= 100) {
        let resultLendario = alert(`O Herói ${nameHero} tem de saldo de ${balance} está no nível Lendário`)
        return resultLendario
    }else if (wins >= 101) {
        let resultImortal = alert(`O Herói ${nameHero} tem de saldo de ${balance} está no nível Imortal`)
        return resultImortal
    }
    
}

getRank(wins)