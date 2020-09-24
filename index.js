const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = passTimes => {
  for (const flyover of passTimes) {
    let timestamp = flyover.risetime;
    let duration = flyover.duration;
    let date = new Date(timestamp);
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});
