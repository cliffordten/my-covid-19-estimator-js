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

const calculatePeriod = (data) => {
  if (data.periodType === 'weeks') {
    return 2 ** Math.floor((data.timeToElapse * 7) / 3);
  }
  if (data.periodType === 'months') {
    return 2 ** Math.floor((data.timeToElapse * 30) / 3);
  }

  return 2 ** Math.floor(data.timeToElapse / 3);
};

const currentInfections = (data) => {
  const currentInfections = data.reportedCases * 10;
  const infectionsByRequestedTime = currentInfections * calculatePeriod(data);

  return {
    currentInfections,
    infectionsByRequestedTime
  };
};
const projectedInfections = (data) => {
  const currentInfections = data.reportedCases * 50;
  const infectionsByRequestedTime = currentInfections * calculatePeriod(data);

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
