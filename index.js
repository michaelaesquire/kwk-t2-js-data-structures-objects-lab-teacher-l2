// Write your solution in this file!
const driver = {


}

function updateDriverWithKeyAndValue(drive,key,value) {
  const newDriver = {...drive};
  newDriver[key] = value;
//  newDriver.address = add1;
  return newDriver;
}

destructivelyUpdateDriverWithKeyAndValue(drive,key,value) {
  drive[key]= value;
}