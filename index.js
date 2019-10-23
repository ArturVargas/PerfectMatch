
//const {startups, investors} = require('./data');
const csv = require('csvtojson');


const matchStartups = async () => {
  const startups = await csv().fromFile('./yn-coding/startups.csv');
  const investors = await csv().fromFile('./yn-coding/investors.csv');
  let startupsList = startups.slice();
  let investorsList = investors.slice();
  //console.log(process(investorsList, startupsList)); 
  process(investorsList, startupsList)
}


function process(investorsList, startupsList) {
  let investorsMatch = [];
  for(let i = 0; i < investorsList.length; i++){
    for(let j = 0; j < 10; j++){
      if(investorsList[i].industry !== 'any'){
        if(investorsList[i].industry == startupsList[j].industry){
          investorsMatch.push(startupsList[j].name);
          startupsList.splice([j], 1);
        }
      } else {
        investorsMatch.push(startupsList[j].name);
        startupsList.splice([j], 1);
      }
    }
    investorsList[i].startups = investorsMatch;
    investorsMatch = [];
  }
  console.log(investorsList);
  return investorsList;
}

matchStartups();

