const firstFilter = require('./firstFilter');
const secondFilter = require("./secondFilter");
const thirdFilter = require("./thirdFilter");

const main = (string) => {
  const firstConversion = firstFilter(string);
  const secondConversion = secondFilter(firstConversion);
  const thirdConverstion = thirdFilter(secondConversion);

  console.log(thirdConverstion);
  return thirdConverstion;
}

main('teste 12');