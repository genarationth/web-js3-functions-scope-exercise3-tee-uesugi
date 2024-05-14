
// Exercise #3.1//

const calCost = x => x + (x * 0.001) + 3 ;

console.log(calCost(1000));

//Exercise #3.2//

const greeting = (name1, name2, name3) => console.log(`Welcome ${name1}, ${name2}, ${name3}.`);

greeting('tee','yee','pee');

const age = year => 2024 - year ;

console.log(age(1998));

const greetage = (name1, age1, name2, age2, name3, age3) =>
    console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`);

greetage('tee',26,'yee',25,'pee',18);

//Challenge Yourself//

const grade = num => {
    if (num === 11) { return '"Perfect" for a score of 11'; } 
    else if (num > 8 && num < 11) { return '"Excellent" for scores greater than 8'; }
    else if (num >= 5 && num <=8) { return "you're pass"; }
    else if (num >= 0 && num < 5) { return "Failed"; }
    return "num should be in range 0 - 11";

};

console.log(grade(11))