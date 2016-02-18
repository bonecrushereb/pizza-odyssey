'use strict'

var PizzaShop = function(locationName, hourlyPMins, hourlyPMaxs, hourlyDMins, hourlyDMaxs){
  this.locationName = locationName;
  this.hourlyPMins = hourlyPMins;
  this.hourlyPMaxs = hourlyPMaxs;
  this.hourlyDMins = hourlyDMins;
  this.hourlyDMaxs = hourlyDMaxs;
  this.pizzasEachHour = [];
  this.deliverysEachHour = [];
  this.hoursOfOperation = ['8:00am','9:00am','10:00am','11:00am','12:00 Noon','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm','10:00pm','11:00pm','12:00 Midnight','2:00am'];
}

PizzaShop.prototype.calcHour = function(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

PizzaShop.prototype.calcPizzasEachHour = function() {
  for (var i = 0; i < this.hoursOfOperation.length; i++) {
    var soldThisHour = this.calcHour(this.hourlyPMins[i], this.hourlyPMaxs[i]);
    this.pizzasEachHour.push(soldThisHour);
  }
}

PizzaShop.prototype.calcdeliverysEachHour = function(){
  for(var i = 0; i < this.hoursOfOperation.length; i++){
    var soldThisHour = this.calcHour(this.hourlyDMins[i],this.hourlyDMaxs[i]);
    this.deliverysEachHour.push(soldThisHour);
  }
}

PizzaShop.prototype.render = function(){

  this.calcPizzasEachHour();
  this.calcdeliverysEachHour();

  var shopTable = document.createElement('table');

  var trHeader1 = document.createElement('tr');

  var tdEl = document.createElement('td');
  trHeader1.appendChild(tdEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trHeader1.appendChild(tdEl);

  var tdEl = document.createElement('td');
  trHeader1.appendChild(tdEl);

  shopTable.appendChild(trHeader1);

  var trHeader2 = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = 'TIME';
  trHeader2.appendChild(tdEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = 'PIZZAS SOLD';
  trHeader2.appendChild(tdEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = 'DELIVERYS MADE';
  trHeader2.appendChild(tdEl);

  shopTable.appendChild(trHeader2);

  for(var i = 0; i < this.hoursOfOperation.length; i++){

    var trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.textContent = this.hoursOfOperation[i];
    trEl.appendChild(tdEl);

    var tdEl = document.createElement('td');
    tdEl.textContent = this.pizzasEachHour[i];
    trEl.appendChild(tdEl);

    var tdEl = document.createElement('td');
    tdEl.textContent = this.deliverysEachHour[i];
    trEl.appendChild(tdEl);

    shopTable.appendChild(trEl);
  }
  document.body.appendChild(shopTable);
}

var ballardPMins = [0,0,0,0,0,0,2,2,2,15,15,15,12,12,12,5,5,5];
var ballardPMaxs = [4,4,4,7,7,7,15,15,15,35,35,35,31,31,31,20,20,20];
var ballardDMins = [0,0,0,0,0,0,1,1,1,3,3,3,5,5,5,6,6,6];
var ballardDMaxs = [4,4,4,4,4,4,4,4,4,8,8,8,12,12,12,11,11,11]
var ballard = new PizzaShop('Ballard', ballardPMins, ballardPMaxs, ballardDMins,ballardDMaxs);

var firstHillPMins = [1,1,1,5,5,5,2,2,2,18,18,18,1,1,1,8,8,8];
var firstHillPMaxs =[3,3,3,9,9,9,13,13,13,32,32,32,3,3,3,20,20,20];
var firstHillDMins = [1,1,1,2,2,2,1,1,1,3,3,3,5,5,5,6,6,6];
var fistHillDMaxs = [7,7,7,8,8,8,6,6,6,9,9,9,12,12,12,16,16,16];
var firstHill = new PizzaShop('First Hill', firstHillPMins, firstHillPMaxs, firstHillDMins, fistHillDMaxs);

var sLUPMins = [0,0,0,0,0,0,5,5,5,25,25,25,22,22,22,5,5,5];
var sLUPMaxs = [4,4,4,7,7,7,15,15,15,39,39,39,36,36,36,21,21,21];
var sLUDMins = [0,0,0,0,0,0,1,1,1,4,4,4,7,7,7,2,2,2];
var sLUMaxs = [4,4,4,4,4,4,4,4,4,6,6,6,15,15,15,8,8,8];
var sLU = new PizzaShop('South Lake Union', sLUPMins, sLUPMaxs,sLUDMins,sLUMaxs);

var GeorgetownPMins = [2,2,2,3,3,3,1,1,1,5,5,5,22,22,22,15,15,15];
var GeorgetownPMaxs = [7,7,7,8,8,8,5,5,5,13,13,13,41,41,41,20,20,20];
var GeorgetownDMins = [3,3,3,3,3,3,1,1,1,2,2,2,15,15,15,6,6,6];
var GeorgetownDMaxs = [5,5,5,9,9,9,4,4,4,4,4,4,42,42,42,21,21,21];
var Georgetown = new PizzaShop('Georgetown', GeorgetownPMins, GeorgetownPMaxs, GeorgetownDMins,GeorgetownDMaxs);

var RavennaPMins = [0,0,0,0,0,0,2,2,2,6,6,6,4,4,4,2,2,2];
var RavennaPMaxs = [4,4,4,7,7,7,15,15,15,9,9,9,8,8,8,4,4,4];
var RavennaDMins = [0,0,0,0,0,0,1,1,1,5,5,5,2,2,2,3,3,3];
var RavennaDMaxs = [4,4,4,4,4,4,4,4,4,18,18,18,5,5,5,11,11,11];
var Ravenna = new PizzaShop('Ravenna', RavennaPMins, RavennaPMaxs, RavennaDMins, RavennaDMaxs);

ballard.render();
firstHill.render();
sLU.render();
Georgetown.render();
Ravenna.render();
