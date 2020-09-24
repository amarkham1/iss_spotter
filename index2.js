const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

  const printPassTimes = passTimes => {
    for (const flyover of passTimes) {
      let timestamp = flyover.risetime;
      let duration = flyover.duration;
      let date = new Date(timestamp);
      console.log(`Next pass at ${date} for ${duration} seconds!`);
    }
  };