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
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
let result = resultReport([98, 87, 67, 91, 92, 33, 87]);
console.log(typeof result);

