
// exercise 31
for(let i=1; i<=6; i++){
    console.log("Da ba dee da ba daa");
}


// exercise 32
for(let i = 25; i >= 0; i-= 5) {
    console.log(i);
}


// exercise 33
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++){
    console.log( people[i].toUpperCase())
}

// example nested arrays
const seetingChart = [
    ['kristen', 'Erick', 'Namita'],
    ['Doku', 'Dorah', 'Anitha', 'Kevin'],
    ['Yuma', 'sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seetingChart.length; i++){
    const row = seetingChart[i];
    console.log(`ROW #${i + 1}`);
    for (let j = 0; j < row.length; j++){
       console.log(row[j]);
    }
}

for (let row of seetingChart) {
    for ( let student of row) {
        console.log(student);
    }
}

for (let char of "Douglas"){
    console.log(char);
}

const numbers = [1,2,3,4,5,6,7,8,9];

for (let num of numbers){
    console.log(`${num * num}`)
}

// object

const testScores = {
    doku: 70,
    amina: 60,
    dula: 70,
    vina: 30,
}

for ( let person in testScores ) {
    console.log(`${person} scored ${testScore[person]}`);
}

let total = 0;

for( let score of Object.values(testScores)) {
    total += score;
}