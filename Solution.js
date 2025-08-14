// Problem-01 : Train TT's Fine Calculator
function totalFine( fare ) {
    // You have to write your code here
    if ( typeof fare === 'number' && fare > 0) {
        const fine = fare + fare * 0.2 + 30;
        return fine;
    }
    else return "Invalid";

}
// console.log(totalFine("Gorib tai ticket katinai"));


// Problem-02 : Clean & Capitalize Characters
function  onlyCharacter( str ) {
    // You have to write your code here
    if (typeof str === 'string' && str.length > 0) {
        let noSpaceStr = str.replaceAll(" ", "");
        let capitalizedStr = noSpaceStr.toUpperCase();
        return capitalizedStr;

    }
    else return "Invalid";
}
// console.log(onlyCharacter("Cy   bar- At  tac k  "));


// Problem-03 : FIFA Best Team Award 
function  bestTeam( player1, player2 ) {
    // You have to write your code here
    if (typeof player1 === 'object' && typeof player2 === 'object' && !(Array.isArray(player1) || Array.isArray(player2))) {
        penalty1 = player1.foul + player1.cardY + player1.cardR;
        penalty2 = player2.foul + player2.cardY + player2.cardR;
        if (penalty1 < penalty2) return player1.name;
        else if (penalty1 > penalty2) return player2.name;
        else return "Tie";
    }
    else return "Invalid";
}

// console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
// { name: "France", foul: 10, cardY: 2, cardR: 1 }));
// console.log(bestTeam([98, 87, 67, 91, 92, 33, 87], [98, 87, 67, 91, 92, 33, 87]));

// Problem-04: Same Same But Different  😕 
function isSame(arr1, arr2) {
  // You have to write your code here
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  return "Invalid";
}

// console.log(isSame([2 , 5 , 6] ,256));


// Problem-05: Exam Result Report Generator
function  resultReport( marks ) {
    // You have to write your code here
    if (Array.isArray(marks)) {
        let n = marks.length;
        let cnt = 0, sum = 0;
        for (let i = 0; i < n; i++) {
            sum += marks[i];
            if (marks[i] >= 40) cnt++;
        }
        return { finalScore: Math.round(sum / n), pass: cnt, fail: n - cnt }
    }
    else return "Invalid";
}
// console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
// let result = resultReport([98, 87, 67, 91, 92, 33, 87]);
// console.log(typeof result);

