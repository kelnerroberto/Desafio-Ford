const firstFilter = (string) => {
  let convertor = [];
  console.log(string.length);
  for(let eachCharacter of string) {
    let charCode = eachCharacter.charCodeAt(0);
    const takeCharCodeSum = charCode + string.length;
    if (takeCharCodeSum > 126) {
      const newCharCode = (takeCharCodeSum - 126) + 32;
      convertor.push(String.fromCharCode(newCharCode));
    }
    convertor.push(String.fromCharCode(charCode + string.length));
  }
  console.log(convertor.join(''));
}

firstFilter('Eu sou 45');