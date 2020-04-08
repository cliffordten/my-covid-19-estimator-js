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
  const currentlyInfected = data.reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * calculatePeriod(data);
  const severeCasesByRequestedTime = (15 / 100) * infectionsByRequestedTime;
  const hospitalBedsByRequestedTime = data.totalHospitalBeds - (35 / 100) * severeCasesByRequestedTime;

  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime
  };
};
const projectedInfections = (data) => {
  const currentlyInfected = data.reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * calculatePeriod(data);
  const severeCasesByRequestedTime = (15 / 100) * infectionsByRequestedTime;
  const hospitalBedsByRequestedTime = data.totalHospitalBeds - (35 / 100) * severeCasesByRequestedTime;

  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime
  };
};

const covid19ImpactEstimator = (data) => ({
  data,
  impact: currentInfections(data),
  severeImpact: projectedInfections(data)
});

export default covid19ImpactEstimator;
