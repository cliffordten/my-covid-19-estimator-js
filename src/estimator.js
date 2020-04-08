/* eslint-disable no-shadow */
// const data = {
//   region: {
//     name: 'Africa',
//     avgAge: 19.7,
//     avgDailyIncomeInUSD: 5,
//     avgDailyIncomePopulation: 0.71
//   },
//   periodType: 'days',
//   timeToElapse: 58,
//   reportedCases: 674,
//   population: 66622705,
//   totalHospitalBeds: 1380614
// };

const currentInfections = (data) => {
  const currentInfections = data.reportedCases * 10;
  const infectionsByRequestedTime = {
    days: currentInfections * Math.pow(2, Math.floor(1 / 3)),
    weeks: currentInfections * Math.pow(2, Math.floor(7 / 3)),
    months: currentInfections * Math.pow(2, Math.floor(30 / 3))
  };

  return {
    currentInfections,
    infectionsByRequestedTime
  };
};
const projectedInfections = (data) => {
  const currentInfections = data.reportedCases * 50;
  const infectionsByRequestedTime = {
    days: currentInfections * Math.pow(2, Math.floor(1 / 3)),
    weeks: currentInfections * Math.pow(2, Math.floor(7 / 3)),
    months: currentInfections * Math.pow(2, Math.floor(30 / 3))
  };

  return {
    currentInfections,
    infectionsByRequestedTime
  };
};

//   infectionsByRequestedTime: this.currentlyInfected * 512

const covid19ImpactEstimator = (data) => ({
  data,
  impact: currentInfections(data),
  severeImpact: projectedInfections(data)
});

export default covid19ImpactEstimator;
