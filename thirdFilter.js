const reverseLowerCaseUpperCase = (string) => {
  let convertor = [];

  for(let eachCharacter of string) {
    if (/\d/.test(eachCharacter)) {
      convertor.push(eachCharacter);
    }
    else if (eachCharacter === eachCharacter.toUpperCase()) {
      convertor.push(eachCharacter.toLowerCase());
    }
    else if (eachCharacter === eachCharacter.toLowerCase()) {
      convertor.push(eachCharacter.toUpperCase());
    }
  }
  return convertor.join('');
}

export default reverseLowerCaseUpperCase;
