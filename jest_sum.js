// from Jest Crash Course - Learn How to Test Your JavaScript Application
//      https://www.youtube.com/watch?v=ajiAl5UNzBU

// to use Jest 
//  0) try running this by itself using node, 
//          in the terminal type 
//              'node sum'
//            (where sum.js is the name of this file) 
//  1) Run using Jest
//      a) read about npm (Node Packet Manager)
//           https://careerfoundry.com/en/blog/web-development/what-is-npm/#:~:text=In%20short%2C%20npm%20is%3A,managing%20package%20versions%20and%20dependencies
//           https://nodesource.com/blog/the-basics-getting-started-with-npm
//      b) create an npm project (file: package.json)
//          in the terminal type 
//              'npm init -y'
//      c) modify package.json so that 
//           "scripts": {
//              "test": "jest"
//           },
//      d) install Jest for this project 
//          (dir: node_modules and 
//          file: package-lock.json)
//          in the terminal type 
//              'npm install --save-dev jest'
//            see https://jestjs.io/docs/getting-started
//          in the terminal type
//              'npm install --save-dev @types/jest'
//            to install code completion for Jest
//  2) test this program with Jest 
//          use the accompanying file - 
//              jest_sum.test.js

function sumTwoNumbers(num1, num2) {
    return num1 + num2
}

console.log(sumTwoNumbers(1,2))

// override the exports of this file, 
// so that the function above can be imported 
// in sum.test.js, e.g. 
//      const sum = require('./sum')
module.exports = sumTwoNumbers

