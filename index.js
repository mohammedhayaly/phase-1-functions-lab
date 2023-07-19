// Code your solution in this file!


function distanceFromHqInBlocks(someValue) {
  // Assuming Scuber's headquarters is at 42nd Street
  const hqLocation = 42;
  // Calculate the distance by subtracting hqLocation from someValue
  return Math.abs(someValue - hqLocation);
}




function distanceFromHqInFeet(someValue) {
  // Call distanceFromHqInBlocks function and pass someValue as an argument
  const distanceInBlocks = distanceFromHqInBlocks(someValue);
  // Each block in Manhattan is 264 feet long, so calculate the distance in feet
  return distanceInBlocks * 264;
}


function distanceTravelledInFeet(start, destination) {
  // Calculate the number of blocks traveled by subtracting start from destination
  const distanceInBlocks = Math.abs(destination - start);
  // Each block in Manhattan is 264 feet long, so calculate the distance in feet
  return distanceInBlocks * 264;
}


function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  // Calculate the fare based on the distance
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}



