// from Jest Crash Course - Learn How to Test Your JavaScript Application
//      https://www.youtube.com/watch?v=ajiAl5UNzBU

// to see execution times open a new Terminal and 
//   in the Terminal type: 
//      'npm run test async'
//     provided package.json was modified so that
//           "scripts": {
//              "test": "jest"
//           },

// Recomend testing in VS Code with Extensions:
//   Test Explorer UI
//   Jest Test Explorer

// this works in Node, but may not work in a browser
// see https://stackdiary.com/guides/referenceerror-require-is-not-defined/
//     https://stackdiary.com/require-vs-import-in-javascript/
//     https://stackoverflow.com/questions/19059580/client-on-node-js-uncaught-referenceerror-require-is-not-defined

const sum = require('./sum')
it('should add 1 + 2 to equal 3', ()=>  {
    const result = sum(1,2);
    expect(result).toBe(3)
})

it('object assignment', () => {
    const obj = {};
    expect(obj).toEqual({})
})