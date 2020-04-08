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

// const impactData = {
//   currentlyInfected: data.reportedCases * 10,
//   infectionsByRequestedTime: this.currentlyInfected * 512
// };

// const severeImpactData = {
//   currentlyInfected: data.reportedCases * 50,
//   infectionsByRequestedTime: this.currentlyInfected * 512
// };

const covid19ImpactEstimator = (data) => ({
  data,
  impact: {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: this.currentlyInfected * 512,
    severeCasesByRequestedTime: (15 / 100) * this.infectionsByRequestedTime,
    hospitalBedsByRequestedTime:
      (35 / 100) * data.totalHospitalBeds - this.severeCasesByRequestedTime
  },
  severeImpact: {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: this.currentlyInfected * 512,
    severeCasesByRequestedTime:
      (15 / 100) * this.infectionsByRequestedTime.covid19ImpactEstimator,
    hospitalBedsByRequestedTime:
      (35 / 100) * data.totalHospitalBeds - this.severeCasesByRequestedTime
  }
});

export default covid19ImpactEstimator;
