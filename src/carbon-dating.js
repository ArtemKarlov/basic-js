const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
// Math.LN2
const LN_2 = 0.693;
const RADIOACTIVE_DECAY_CONSTANT = LN_2 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || !sampleActivity) return false;

  const activity = Number.parseFloat(sampleActivity);
  if (Number.isNaN(activity) || activity < 1 || activity > MODERN_ACTIVITY)
    return false;

  const t = Math.log(MODERN_ACTIVITY / activity) / RADIOACTIVE_DECAY_CONSTANT;

  return Math.ceil(t);
};
