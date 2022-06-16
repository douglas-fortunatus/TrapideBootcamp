let lootNo = [2,4,6,8.10];

const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix'];

leaderboard[1] = "Luna";
leaderboard[3] = "Draco"


// exercise 27

const students = ['Justine','Glory', 'Nadia', 'Mercy', 'Abdul'];

students.shift();
students.push('Douglas');
students.unshift('Mercy');

// nested arrays

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

airplaneSeats[3][1] = "Hugo";


console.log(airplaneSeats);