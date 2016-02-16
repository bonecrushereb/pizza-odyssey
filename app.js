'use strict'

//8am-11am pizza/hr
function p_h8_11() {
  var p8_11min = 0;
  var p8_11max = 4;
  var result = Math.floor(Math.random() * (p8_11max - p8_11min + 1)) + p8_11min;
  console.log('8am-11am pizza/hour has a number of ' + result);
  return result;
}

//8-11am delivery/hr
function d_h8_11() {
  var d8_11min = 0;
  var d8_11max = 4;
  var result = Math.floor(Math.random() * (d8_11max - d8_11min + 1)) + d8_11min;
  console.log('8am-11am delivery/hour has a number of ' + result);
  return result;
}

//11am-2pm pizza/hr
function p_h11_2(){
  var p11_2min = 0;
  var p11_2max = 7;
  var result = Math.floor(Math.random() * (p11_2max - p11_2min + 1)) +p11_2min;
  console.log('11am-2pm pizza/hour has a number of ' + result);
  return result;
}

//11am-2pm delivery/hr
function d_h11_2() {
  var d11_2min = 0;
  var d11_2max = 4;
  var result = Math.floor(Math.random() * (d11_2max - d11_2min + 1)) + d11_2min;
  console.log('11am-2pm delivery/hour has a number of ' + result);
  return result;
}

//2pm-5pm pizza/hr
function p_h2_5(){
  var p2_5min = 2;
  var p2_5max = 15;
  var result = Math.floor(Math.random() * (p2_5max - p2_5min + 1)) +p2_5min;
  console.log('2pm-5pm pizza/hour has a number of ' + result);
  return result;
}

//2pm-5pm delivery/hr
function d_h2_5() {
  var d2_5min = 1;
  var d2_5max = 4;
  var result = Math.floor(Math.random() * (d2_5max - d2_5min + 1)) + d2_5min;
  console.log('2pm-5pm delivery/hour has a number of ' + result);
  return result;
}

//5pm-8pm pizza/hr
function p_h5_8(){
  var p5_8min = 15;
  var p5_8max = 35;
  var result = Math.floor(Math.random() * (p5_8max - p5_8min + 1)) +p5_8min;
  console.log('5pm-8pm pizza/hour has a number of ' + result);
  return result;
}

//5pm-8pm delivery/hr
function d_h5_8() {
  var d5_8min = 3;
  var d5_8max = 8;
  var result = Math.floor(Math.random() * (d5_8max - d5_8min + 1)) + d5_8min;
  console.log('5pm-8pm delivery/hour has a number of ' + result);
  return result;
}

//8pm-11pm pizza/hr
function p_h8_11(){
  var p8_11min = 15;
  var p8_11max = 35;
  var result = Math.floor(Math.random() * (p8_11max - p8_11min + 1)) +p8_11min;
  console.log('8pm-11pm pizza/hour has a number of ' + result);
  return result;
}

//8pm-11pm delivery/hr
function d_h8_11() {
  var d8_11min = 3;
  var d8_11max = 8;
  var result = Math.floor(Math.random() * (d8_11max - d8_11min + 1)) + d8_11min;
  console.log('8pm-11pm delivery/hour has a number of ' + result);
  return result;
}

//11pm-2am pizza/hr
function p_h11p_2p(){
  var p11_2min = 5;
  var p11_2max = 20;
  var result = Math.floor(Math.random() * (p11_2max - p11_2min + 1)) +p11_2min;
  console.log('11pm-2am pizza/hour has a number of ' + result);
  return result;
}

//11pm-2am delivery/hr
function d_h11p_2p() {
  var d11_2min = 6;
  var d11_2max = 11;
  var result = Math.floor(Math.random() * (d11_2max - d11_2min + 1)) + d11_2min;
  console.log('11pm-2am delivery/hour has a number of ' + result);
  return result;
}

var ballard = {
  name: pizza-odyssey,
  times: timeList
};
var timeList =['8am-11am','11am-2pm','2pm-5pm','5pm-8pm','8pm-11pm','11pm-2am'];
var placeForMyList = document.getElementById('ballard');
function listify(listedTimes){
//for loop to iterate thru the arrays
  for(var i = 0; i < listedTimes.length; i++){
//build li element
    var liEl = document.createElement('li');
    liEl.textContent = listedTimes[i];

//put it in the DOM
    placeForMyList.appendChild(liEl);
  }
}

listify(listTimes);
