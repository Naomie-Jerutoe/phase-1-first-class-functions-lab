// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    

function createFareMultiplier(number) {
  return function (fare){
    return fare * number;
  }
}

function fareDoubler(fare) {
  const doubler = createFareMultiplier(2)(fare);
  return doubler;
}

function fareTripler(fare) {
  const trippler = createFareMultiplier(3)(fare);
  return trippler;
}

function selectDifferentDrivers(driver, driverNames){
  return driverNames(driver);
}
