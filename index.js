function logFeature(title, message, ...args) {
    console.log(`---------- ${title}`);
    if (message) {
        console.log(`${message}: `);
    }
    console.log(...args);
    console.log("\n\n");
}

// Arrow Functions
const addValues = (a, b) => a + b;
logFeature('Arrow Functions', 'addValues', addValues(1, 2));

// Destructuring
const numberArr = [1, 2, 3];
const [one,,three] = numberArr;
logFeature('Destructuring', 'numberArr, one, three', numberArr, one, three);

// Shorthand Properties
const a = 'A';
const b = 'B';
const c = 'C';
const letterObj = { a, b, c };
logFeature('Shorthand Properties', 'a, b, c, letterObj', a, b, c, letterObj);

// Spread Syntax
const letterArr1 = ['A'];
const letterArr2 = ['B', 'C'];
const letterArr3 = [
    ...letterArr1,
    ...letterArr2,
];
logFeature('Spread Syntax', 'letterArr1, letterArr2, letterArr3', letterArr1, letterArr2, letterArr3);

// Nullish Colescing Operator
const zeroName = 0 ?? 'Anonymous (Zero)';
const falseName = false ?? 'Anonymous (False)';
const undefinedName = undefined ?? 'Anonymous (Undefined)';
logFeature('Nullish Colescing Operator', 'zeroName, falseName, undefinedName', zeroName, falseName, undefinedName);

// Optional Chaining Operator
const animals = {
    cat: {
        name: 'Mr. Whiskers',
        legs: 4,
        favoriteFood: [
            'Fish',
            'Chicken',
            'Turkey',
        ],
    },
    horse: {

    },
    methods: {},
}
const catLegs = animals.cat.legs;
const dogLegs = animals.dog?.legs;
const horseFood = animals.horse.favoriteFood?.[0];
const getTotalLegs = animals.methods.getTotalLegs?.();
logFeature('Optional Chaining Operator', 'catLegs, dogLegs, horseFood, getTotalLegs', catLegs, dogLegs, horseFood, getTotalLegs);
