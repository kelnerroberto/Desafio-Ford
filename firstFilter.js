export default firstFilter = (string) => {
  const LENGTH = string.length;
  let convertor = [];

  for(let eachCharacter of string) {
    let charCode = eachCharacter.charCodeAt(0) + LENGTH;
    convertor.push(charCode);
  }

  return convertor.join('');
}