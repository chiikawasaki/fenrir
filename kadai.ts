const isValid = (s: string): boolean => {
  const stack: string[] = [];

  const pairs: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      //最後に開いた括弧を最初に閉じる
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  //閉じ忘れのチェック　空ならtrue
  return stack.length === 0;
};

let s = "()";
console.log(isValid(s)); // true
s = "({)}";
console.log(isValid(s)); // false
s = "({)}"; //false
console.log(isValid(s)); // false
