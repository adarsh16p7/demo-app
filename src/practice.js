// const radius = [1, 3, 5, 7, 2, 4, 6, 8, 9];

// const area = function (radius) {
//     return (Math.PI*(radius**2))
// }

// const diameter = function (radius){
//     return radius*2
// }

// const circumference = function (radius) {
//     return 2*Math.PI*radius
// }

// const calculate = function (radius, logic) {
//     return radius.map(logic)
// }

// var a;
// console.log(calculate(radius, diameter));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, area));
// console.log(a);

const players = [
    {
        firstName: "Rodrigo",
        lastName: "Hernandez Cascante",
        age: 28,
        country: "Spain"
    },
    {
        firstName: "Erling",
        lastName: "Haaland",
        age: 23,
        country: "Norway"
    },
    {
        firstName: "Kevin",
        lastName: "De Bruyne",
        age: 32,
        country: "Belgium"
    },
    {
        firstName: "Jack",
        lastName: "Grealish",
        age: 28,
        country: "England"
    },
    {
        firstName: "Ruben",
        lastName: "Dias",
        age: 26,
        country: "Portugal"
    },
    {
        firstName: "Bernardo",
        lastName: "Silva",
        age: 29,
        country: "Portugal"
    }
];

const fullNameArr = players.map((obj) => obj.firstName + " " + obj.lastName);

const ageCollection = players.reduce(function(acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] += 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc
}, {})

const filteredByAge = players.filter((player) => {
    return player.age < 29
}).map(player => player.firstName)

const filteredByAgeByReduce = players.reduce(function(acc, curr) {
    if(curr.age < 29) {
        acc.push(curr.firstName)
    }
    return acc;
}, [])

// console.log(fullNameArr);
// // console.log(ageCollection);
// console.log(filteredByAge);
// console.log(filteredByAgeByReduce);


console.log("undefined");


