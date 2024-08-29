export const nutrients = [
  {
    id: 1,
    nutrientName: "Fat",
    totalGrams: 66,
    goalGrams: 93,
    get leftGram() {
      return this.goalGrams - this.totalGrams;
    },
  },
  {
    id: 2,
    nutrientName: "Saturated Fat",
    totalGrams: 36,
    goalGrams: 93,
    get leftGram() {
      return this.goalGrams - this.totalGrams;
    },
  },
  {
    id: 3,
    nutrientName: "Protein",
    totalGrams: 26,
    goalGrams: 93,
    get leftGram() {
      return this.goalGrams - this.totalGrams;
    },
  },
  {
    id: 4,
    nutrientName: "Carbs",
    totalGrams: 50,
    goalGrams: 93,
    get leftGram() {
      return this.goalGrams - this.totalGrams;
    },
  },
  {
    id: 5,
    nutrientName: "Vitamin A",
    totalGrams: 90,
    goalGrams: 93,
    get leftGram() {
      return this.goalGrams - this.totalGrams;
    },
  },
  {
    id: 6,
    nutrientName: "Vitamin C",
    totalGrams: 80,
    goalGrams: 93,
    get leftGram() {
      return this.goalGrams - this.totalGrams;
    },
  },
  {
    id: 7,
    nutrientName: "Iron",
    totalGrams: 123,
    goalGrams: 93,
    get leftGram() {
      return this.goalGrams - this.totalGrams;
    },
  },
];
