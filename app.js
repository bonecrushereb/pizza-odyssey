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
  shopTable.id = 'table';

  var trHeader1 = document.createElement('tr');

  // var tdEl = document.createElement('td');
  // trHeader1.appendChild(tdEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trHeader1.appendChild(tdEl).colSpan = '3';

  // var tdEl = document.createElement('td');
  // trHeader1.appendChild(tdEl);

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

  document.getElementById('store_data').appendChild(shopTable);
}

var ballard = new PizzaShop('Ballard', ballardPMins, ballardPMaxs, ballardDMins,ballardDMaxs);

var firstHill = new PizzaShop('First Hill', firstHillPMins, firstHillPMaxs, firstHillDMins, fistHillDMaxs);

var sLU = new PizzaShop('South Lake Union', sLUPMins, sLUPMaxs,sLUDMins,sLUMaxs);

var Georgetown = new PizzaShop('Georgetown', GeorgetownPMins, GeorgetownPMaxs, GeorgetownDMins,GeorgetownDMaxs);

var Ravenna = new PizzaShop('Ravenna', RavennaPMins, RavennaPMaxs, RavennaDMins, RavennaDMaxs);

ballard.render();
firstHill.render();
sLU.render();
Georgetown.render();
Ravenna.render();
