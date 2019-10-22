
// const csvToJson = require('csvtojson');

const { startups, investors } = require('./data');
let startupsList = startups.slice();
//console.log(startupsList);
let investorsMatch = [];

const match = () => {
  let result = [];
  investors.forEach(function(investor) {
    if(investor.industry !== 'any'){
      investorsMatch = startupsList.filter((startup) => {
      return startup.industry == investor.industry;
      });
    } else {
      investorsMatch = startupsList;
    }
    investorsMatch.length > 10 ? investorsMatch.length = 10 : undefined;
    investor.startups = investorsMatch;
    result.push(investor);
  });
  console.log(investors[0], investors[2]);
  return result;
}

console.log(match());


