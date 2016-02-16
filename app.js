'use strict'

var shop1 = document.getElementById('ballard');
var shop2 = document.getElementById('fistHill');
var shop3 = document.getElementById('internDist');
var shop4 = document.getElementById('sLU');
var shop5 = document.getElementById('georgetown');
var shop6 = document.getElementById('ravenna');

var timeList =['8:00am','9:00am','10:00am','11:00am','12:00 Noon','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm','10:00pm','11:00pm','12:00 Midnight','2:00am'];

var ballard = {
  name: 'pizza3001',
  location: 'Ballard',
  pizza:[],
  delivery:[],
  schedule: function(){
    //for loop to iterate thru the arrays
    for(var i = 0; i < timeList.length; i++){
      //build li element
      var liEl = document.createElement('li');
      liEl.textContent = timeList[i];
      //put it in the DOM
      shop1.appendChild(liEl);
    }
  }
};
ballard.schedule();

var firstHill = {
  name: 'pizza3001',
  location: 'First Hill',
  pizza:
  delivery:
  schedule: function(){
  //for loop to iterate thru the arrays
    for(var i = 0; i < timeList.length; i++){
  //build li element
      var liEl = document.createElement('li');
      liEl.textContent = timeList[i];

  //put it in the DOM
      shop2.appendChild(liEl);
    }
  }
};
firstHill.schedule();

var internDist = {
  name: 'pizza3001',
  location: 'The International District',
  schedule: function(){
  //for loop to iterate thru the arrays
    for(var i = 0; i < timeList.length; i++){
  //build li element
      var liEl = document.createElement('li');
      liEl.textContent = timeList[i];

  //put it in the DOM
      shop3.appendChild(liEl);
    }
  }
};
internDist.schedule();

var sLU = {
  name: 'pizza3001',
  location: 'South Lake Union',
  schedule: function(){
  //for loop to iterate thru the arrays
    for(var i = 0; i < timeList.length; i++){
  //build li element
      var liEl = document.createElement('li');
      liEl.textContent = timeList[i];

  //put it in the DOM
      shop4.appendChild(liEl);
    }
  }
};
sLU.schedule();

var georgetown = {
  name: 'pizza3001',
  location: 'Georgetown',
  schedule: function(){
  //for loop to iterate thru the arrays
    for(var i = 0; i < timeList.length; i++){
  //build li element
      var liEl = document.createElement('li');
      liEl.textContent = timeList[i];

  //put it in the DOM
      shop5.appendChild(liEl);
    }
  }
};
georgetown.schedule();

var ravenna = {
  name: 'pizza3001',
  location: 'Ravenna',
  schedule: function(){
  //for loop to iterate thru the arrays
    for(var i = 0; i < timeList.length; i++){
  //build li element
      var liEl = document.createElement('li');
      liEl.textContent = timeList[i];

  //put it in the DOM
      shop6.appendChild(liEl);
    }
  }
};
ravenna.schedule();

function randomGenerator(min,max) {
  var result = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log('The random number is ' + result);
  return result;
}


var pizza = [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]];
var delivery = [[0,4],[0,4],[1,4],[3,8],[5,12],[6,11];
var pizzzProbabillit = [];
var deliveryProb = [];

for (var i = 0; i < pizza.length; i++) {
  randomGenerator(pizza[i][0],pizza[i][1]);
}

for(var i = 0; i < delivery.length; i++){
  randomGenerator(delivery[i][0],delivery[i][1]);
}
