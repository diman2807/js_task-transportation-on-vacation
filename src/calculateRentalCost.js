/**
 * @param {number} days
 *
 * @return {number}
 */

const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  const oneDayCost = 40;

  if (days < SHORT_TERM) {
    return oneDayCost * days;
  } else if (days < LONG_TERM) {
    return oneDayCost * days - SHORT_TERM_DISCOUNT;
  } else {
    return oneDayCost * days - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
