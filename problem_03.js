function  bestTeam( player1, player2 ) {
    // You have to write your code here
    if (typeof player1 === 'object' && typeof player2 === 'object') {
        penalty1 = player1.foul + player1.cardY + player1.cardR;
        penalty2 = player2.foul + player2.cardY + player2.cardR;
        if (penalty1 < penalty2) return player1.name;
        else if (penalty1 > penalty2) return player2.name;
        else return "Tie";
    }
    else return "Invalid";
}

console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"));
