// function for averaging
function calcAvg(score1, score2, score3) {
    return (score1 + score2 + score3) / 3
}

// else if for printing their grade
function assignGrade(average) {
    if (average >= 90) {
        return "A";
    } else if (average >=80) {
        return "B";
    } else if (average >=70) {
        return "C";
    } else if (average >=60) {
        return "D";
    } else {
        return "F";
    }
}

// get the user's input
// const score1 = parseFloat(prompt("Enter score 1:"));
// const score2 = parseFloat(prompt("Enter score 2:"));
// const score3 = parseFloat(prompt("Enter score 3:"));

const scores=[]
for (let i =0; i < 3; i++) {
    const score = prompt(`Enter Score ${i + 1}:`)
    scores.push(parseInt(score))
}

const average = calcAvg(...scores);
const grade = assignGrade(average);

console.log(`Average Score: ${average}`);
console.log(`Final Grade: ${grade}`);