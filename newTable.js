function renderNew(locationName, hourlyPMins, hourlyPMaxs, hourlyDMins, hourlyDMaxs) {
  tbl = document.getElementById('table');
  var shop = new PizzaShop(locationName, hourlyPMins, hourlyPMaxs, hourlyDMins, hourlyDMaxs);
}

function renderUpdate(locationName, hourlyPMins, hourlyPMaxs, hourlyDMins, hourlyDMaxs) {
  var trEl = document.getElementById(shop.name.replace(' ', '').toLowerCase());

  this.locationName = locationName;
  this.hourlyPMins = hourlyPMins;
  this.hourlyPMaxs = hourlyPMaxs;
  this.hourlyDMins = hourlyDMins;
  this.hourlyDMaxs = hourlyDMaxs;
  // this.totalPizzas = totalPizzas;
  this.pizzasEachHour = [];
  this.deliverysEachHour = [];
  this.hoursOfOperation = ['8:00am','9:00am','10:00am','11:00am','12:00 Noon','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm','10:00pm','11:00pm','12:00 Midnight','2:00am'];


  for (var i = 0; i < shop.pizzasEachHour.length; i++) {
    trEl.childNodes[i + 1].textContent = shop.pizzasEachHour[i];
  }
  trEl.childNodes[trEl.childNodes.length-1].textContent = shop.pizzasEachHour;

  for (var i = 0; i < shop.deliverysEachHour.length; i++) {
    trEl.childNodes[i + 1].textContent = shop.deliverysEachHour[i];
  }
  trEl.childNodes[trEl.childNodes.length-1].textContent = shop.deliverysEachHour;
}
