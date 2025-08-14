function totalFine( fare ) {
    // You have to write your code here
    if ( typeof fare === 'number' && fare > 0) {
        const fine = fare + fare * 0.2 + 30;
        return fine;
    }
    else 
        return "Invalid";

}
console.log(totalFine("Gorib tai ticket katinai"));

