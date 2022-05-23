const firstFilter = (string) => {
  const LENGTH = string.length;
  let convertor = [];

  for(let eachCharacter of string) {
    let charCode = eachCharacter.charCodeAt(0);
    convertor.push(String.fromCharCode(charCode + LENGTH));
  }

  return convertor.join('');
}

export default firstFilter;