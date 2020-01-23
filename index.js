function logFeature(title, message, ...args) {
    console.log(`---------- ${title}`);
    if (message) {
        console.log(`${message}: `);
    }
    console.log(...args);
    console.log(); // Blank line
}

// Arrow Functions
// Compact alternative to a normal function expression, maintains this context
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const addValues = (a, b) => a + b;
logFeature('Arrow Functions', 'addValues', addValues(1, 2));

// Destructuring Assignment
// Plucks values from arrays or properties from objects in to a variable
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const numberArr = [1, 2, 3];
const [one,,three] = numberArr;
logFeature('Destructuring', 'numberArr, one, three', numberArr, one, three);

// Shorthand Property Names
// Add a new property to an object with a single reference, the variable name becoming the key
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Syntax
const a = 'A';
const b = 'B';
const c = 'C';
const letterObj = { a, b, c };
logFeature('Shorthand Properties', 'a, b, c, letterObj', a, b, c, letterObj);

// Spread Syntax / Spread Operator
// Allows creating copies of object with new or updated values
// functions similarly to Object.assign(object1, object2)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const letterArr1 = ['A'];
const letterArr2 = ['B', 'C'];
const letterArr3 = [
    ...letterArr1,
    ...letterArr2,
];
logFeature('Spread Syntax', 'letterArr1, letterArr2, letterArr3', letterArr1, letterArr2, letterArr3);

// Nullish Colescing Operator
// A logical operator that returns the right side of the operation if the left is undefined
// or null. Similar in usage to OR ||
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
const zeroName = 0 ?? 'Anonymous (Zero)';
const falseName = false ?? 'Anonymous (False)';
const undefinedName = undefined ?? 'Anonymous (Undefined)';
logFeature('Nullish Colescing Operator', 'zeroName, falseName, undefinedName', zeroName, falseName, undefinedName);

// Optional Chaining Operator
// Allows reading the value of a property deep in an object without validating every reference
// Short circuits and returns undefined if an optional chain is missing
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
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
// Not something we should do, use invoke instead
// This will return undefined but we don't know if it's from the actual function call
// or the lack of a function
const getTotalLegs = animals.methods.getTotalLegs?.();
logFeature('Optional Chaining Operator', 'catLegs, dogLegs, horseFood, getTotalLegs', catLegs, dogLegs, horseFood, getTotalLegs);
