import React from "react";

const NutrientCard = ({ nutrient }) => {
  return (
    <div className="nutrient-card">
      <div className="nutrient-card__nutrient-wrapper">
        <p className="nutrient-card__nutrient-name">{nutrient.nutrientName}</p>
        <div className="nutrient-card__nutrients">
          <p className="nutrient-card__nutrient-grams">{nutrient.totalGrams}</p>
          <p className="nutrient-card__nutrient-grams">{nutrient.goalGrams}</p>
          <p className="nutrient-card__nutrient-grams">{nutrient.leftGram}</p>
        </div>
      </div>
      <div className="nutrient-card__progress-bar">
        <div
          className="nutrient-card__progress"
          style={{
            background:
              nutrient.nutrientName === "Protein"
                ? "#F89E52"
                : nutrient.nutrientName === "Fat"
                ? "#4A4995"
                : nutrient.nutrientName === "Carbs"
                ? "#2A8460"
                : "#797979",
            width: `${
              (nutrient.totalGrams / nutrient.goalGrams) * 100 > 100
                ? "100"
                : (nutrient.totalGrams / nutrient.goalGrams) * 100
            }%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default NutrientCard;
