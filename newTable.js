
var dataForm = document.getElementById('data-form');
var dataList = document.getElementsByTagName('table');

function handlePizzaShopSubmit(event){
  var locationName = event.target.locationName.value;
  console.log('location is' + locationName);
  var hourlyPMins = parseInt(event.target.hourlyPMins.value);
  console.log('location is' + hourlyPMins);
  var hourlyPMaxs = parseInt(event.target.hourlyPMaxs.value);
  console.log('location is' + hourlyPMaxs);
  var hourlyDMins = parseInt(event.target.hourlyDMins.value);
  console.log('location is' + hourlyDMins);
  var hourlyDMaxs = parseInt(event.target.hourlyDMaxs.value);
  console.log('location is' + hourlyDMaxs);

  console.log(event);
  event.preventDefault();

  // if(!event.target.locationName.value || !event.target.hourlyPMins.value || !event.target.hourlyPMaxs.value || !event.target.hourlyDMins.value||event.target.hourlyDMaxs.value){
  //   return alert('Fields cannot be empty!');
  // }

  var newPizzaShop = new PizzaShop(locationName, hourlyPMins, hourlyPMaxs, hourlyDMins, hourlyDMaxs);

  console.log('submission by' + event.target.locationName.value + ' at ' + Date());
  event.target.locationName.value = null;
  event.target.hourlyPMins.value = null;
  event.target.hourlyPMaxs.value = null;
  event.target.hourlyDMins.value = null;
  event.target.hourlyDMaxs.value = null;

  shops.pizzasEachHour.push(this.pizzasEachHour);
  shops.deliverysEachHour.push(this.deliverysEachHour);

}

dataForm.addEventListener('submit', handlePizzaShopSubmit);
