// to start 
//  0) download and install both VS Code and Node.js
//          https://nodejs.org/en/download/
//          https://nodejs.dev/en/learn/
//  1) you may need to use cmd prompt instead of powershell in your VS Code terminal
      // In VSCode: Terminal → New Terminal
      // Click the dropdown (top right of terminal panel)
      // Select “Select Default Profile”
      // Choose Command Prompt
      // Open a new terminal
      // 
//  2) run this JavaScript program (using Node)
//          open new Terminal in VS Code
//          in the terminal type 
//              'node sum'
//            (where sum.js is the name of this file) 

var msg = 'Hello World';
console.log(msg);

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let totalAmount = sum(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(totalAmount)