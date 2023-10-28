function HasBalancedBrackets(string) {
    // Your code here:
  
    // const stack = [];
  ​
    // const symbols = {"(": ")", "{": "}", "[": "]"};
  ​
    // for (let i = 0; i < string.length; i++) {
    //   const character = string[i];
  ​
    //   if (symbols[character]) {
    //     stack.push(character);
    //   } else if (symbols[stack.pop()] !== character) {
    //     return false;
    //   }
    // }
  ​
    // return stack.length === 0;
  ​
    const stack = [];
  ​
    const openning = ["(", "[", "{"];
    const closing = [")", "]", "}"];
  ​
    for (let i = 0; i < string.length; i++) {
      const character = string[i];
  ​
      if (openning.includes(character)) {
        stack.push(character);
      } else if (closing.includes(character)) {
        // "}"  en el stack "{" ==> "{" === "}"
  ​
        const transformedSymbol = openning[closing.indexOf(character)];
  ​
        if (transformedSymbol !== stack.pop()) return false;
      }
    }
  ​
    return stack.length === 0;
  }
  ​
  console.log(HasBalancedBrackets("({})")); //(true)
  console.log(HasBalancedBrackets("{[(])}")); //(false)
  console.log(HasBalancedBrackets("}")); //(false)
  console.log(HasBalancedBrackets("{()")); //(false)
  console.log(HasBalancedBrackets("{([(])}")); //(false)
  ​
  module.exports = HasBalancedBrackets;