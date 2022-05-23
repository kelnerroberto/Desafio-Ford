const secondFilter = (string) => {
  const convertStringToArray = string.split('');
  const reverseArray = convertStringToArray.reverse();
  const reversedArrayToString = reverseArray.join('');

  return reversedArrayToString;
}

export default secondFilter;