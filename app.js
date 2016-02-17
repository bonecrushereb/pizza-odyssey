'use strict'

var pizzaProbability = [];
var deliveryProbability = [];
var timeList =['8:00am','9:00am','10:00am','11:00am','12:00 Noon','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm','10:00pm','11:00pm','12:00 Midnight','2:00am'];

function tableHeader(locations, tableEl){
  var thEl = document.createElement('th');
  for (var i = 0; i < locations.length; i++) {
    thEl.textContent = locations[i];
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);
}

function tableRowMaker (inputArray, tableEl){
  var trEl = document.createElement('tr');
  for (var i = 0; i < inputArray.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = inputArray[i];
    trEl.appendChild(tdEl);
  }
  tableEl.appendChild(trEl);
}

// var location = document.createElement('p');
var locations = ['Ballard','First Hill', 'The International District', 'South Lake Union', 'Georgetown', 'Ravenna'];
var rowOneLabels = ['Time', 'Min Pizza/hr', 'Max Pizza/hr','Min Delivery/hr', 'Max Delivery/hr'];
var tableEl = document.createElement('table');
tableRowMaker(rowOneLabels, tableEl);
document.body.appendChild(tableEl);


function PizzaShop(locationName, storeData, tableRowMaker){
  this.locationName = location[i];
  this.storeDate = storeData();
  this.makeTableRow = makeTableRow();
};

PizzaShop.prototype.storeData = function(){

  var pizza = [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]];
  var delivery = [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]];

  function randomGenerator(min,max) {
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('The random number is ' + result);
    return result;
  }
  for (var i = 0; i < pizza.length; i++) {
    pizzaProbability.push(randomGenerator(pizza[i][0],pizza[i][1]));
  }

  for(var i = 0; i < delivery.length; i++){
    deliveryProbability.push(randomGenerator(delivery[i][0],delivery[i][1]));
  }
}

// var myfunction = makeTableRow;

// function makeTableRow(){

// function createPmaker(locations){
//   for (var i = 0; i < pArray.length; i++) {
//     var p = document.createElement('p');
//     p.textContent = pArray[i];
//   }
// }
// }







//var ballard = new PizzaShop('Ballard',ballardData);

// var ballard = {
//   name: 'pizza3001'//   location: 'Ballard',
//   pizza: ,
//   delivery: ,
//   schedule: function(){
//     //for loop to iterate thru the arrays
//     for(var i = 0; i < timeList.length; i++){
//       //build li element
//       var liEl = document.createElement('li');
//       liEl.textContent = timeList[i];
//       //put it in the DOM
//       shop1.appendChild(liEl);
//     }
//   }
// };
// ballard.schedule();
// ballard.pizza;
//
// var firstHill = {
//   name: 'pizza3001',
//   location: 'First Hill',
//   // pizza:
//   // delivery:
//   schedule: function(){
//   //for loop to iterate thru the arrays
//     for(var i = 0; i < timeList.length; i++){
//   //build li element
//       var liEl = document.createElement('li');
//       liEl.textContent = timeList[i];
//
//   //put it in the DOM
//       shop2.appendChild(liEl);
//     }
//   }
// };
// firstHill.schedule();
//
// var internDist = {
//   name: 'pizza3001',
//   location: 'The International District',
//   schedule: function(){
//   //for loop to iterate thru the arrays
//     for(var i = 0; i < timeList.length; i++){
//   //build li element
//       var liEl = document.createElement('li');
//       liEl.textContent = timeList[i];
//
//   //put it in the DOM
//       shop3.appendChild(liEl);
//     }
//   }
// };
// internDist.schedule();
//
// var sLU = {
//   name: 'pizza3001',
//   location: 'South Lake Union',
//   schedule: function(){
//   //for loop to iterate thru the arrays
//     for(var i = 0; i < timeList.length; i++){
//   //build li element
//       var liEl = document.createElement('li');
//       liEl.textContent = timeList[i];
//
//   //put it in the DOM
//       shop4.appendChild(liEl);
//     }
//   }
// };
// sLU.schedule();
//
// var georgetown = {
//   name: 'pizza3001',
//   location: 'Georgetown',
//   schedule: function(){
//   //for loop to iterate thru the arrays
//     for(var i = 0; i < timeList.length; i++){
//   //build li element
//       var liEl = document.createElement('li');
//       liEl.textContent = timeList[i];
//
//   //put it in the DOM
//       shop5.appendChild(liEl);
//     }
//   }
// };
// georgetown.schedule();
//
// var ravenna = {
//   name: 'pizza3001',
//   location: 'Ravenna',
//   schedule: function(){
//   //for loop to iterate thru the arrays
//     for(var i = 0; i < timeList.length; i++){
//   //build li element
//       var liEl = document.createElement('li');
//       liEl.textContent = timeList[i];
//
//   //put it in the DOM
//       shop6.appendChild(liEl);
//     }
//   }
// };
// ravenna.schedule();
//
