// const {Observable} = require('rxjs');
// const csvToJson = require('csvtojson');
// //const fs = require('fs');
// const startupsFile = './yn-coding/startups.csv';
// let startupsList = [];

// const convertFile = new Observable(subscriber => {
//   csvToJson().fromFile(startupsFile)
//   .then((json) => {
//     subscriber.complete(json);
//   })
// }) 

// convertFile.subscribe((data) => {
//   console.log(data);
// })

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
  return result;
}

console.log(match());


