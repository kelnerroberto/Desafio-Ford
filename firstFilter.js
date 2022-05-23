const firstFilter = (string) => {
  let convertor = [];
  for(let eachCharacter of string) {
    let charCode = eachCharacter.charCodeAt(0);
    const takeCharCodeSum = charCode + string.length;
    if (takeCharCodeSum > 126) {
      const newCharCode = (takeCharCodeSum - 126) + 32;
      convertor.push(String.fromCharCode(newCharCode));
    }
    convertor.push(String.fromCharCode(charCode + string.length));
  }
  return convertor.join('');
}

module.exports = firstFilter;