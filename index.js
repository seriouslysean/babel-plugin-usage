
// Use @babel/plugin-transform-arrow-functions to transpile
const addValues = (a, b) => a + b;

// Use @babel/plugin-transform-destructuring to transpile
const numberArr = [1, 2, 3];
const [one,,three] = arr;

// Use @babel/plugin-transform-shorthand-properties to transpile
const a = 'A';
const b = 'B';
const c = 'C';
const letterObj = { a, b, c };

// Use @babel/plugin-transform-spread to transpile
const letterArr1 = ['A'];
const letterArr2 = ['B', 'C'];
const letterArr3 = [
    ...letterArr1,
    ...letterArr2,
];
