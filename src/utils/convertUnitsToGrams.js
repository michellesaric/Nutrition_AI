export const convertUnitsToGrams = (unit, amount) => {
  let amountInGrams = 0;
  switch (unit) {
    case "table_spoon":
      amountInGrams = 17 * amount;
      break;
    case "tea_spoon":
      amountInGrams = 5.7 * amount;
      break;
    case "glass":
      amountInGrams = 200 * amount;
      break;
    case "smaller_glass":
      amountInGrams = 100 * amount;
      break;
    case "cup":
      amountInGrams = 236 * amount;
      break;
    case "plate":
      amountInGrams = 400 * amount;
      break;
    case "smaller_plate":
      amountInGrams = 200 * amount;
      break;
    case "handfull":
      amountInGrams = 37 * amount;
      break;
    default:
      break;
  }
  return amountInGrams;
};
