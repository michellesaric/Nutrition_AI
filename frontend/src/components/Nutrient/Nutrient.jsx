const Nutrient = ({ nutrientName, nutrientGrams, nutrientPercentage }) => {
  return (
    <div className="nutrient__wrapper">
      <div className="nutrient__name-grams-wrapper">
        <p className="nutrient__name">{nutrientName}</p>
        <p className="nutrient__grams">{nutrientGrams} g</p>
      </div>
      <p className="nutrient__precentage">{nutrientPercentage}%</p>
    </div>
  );
};

export default Nutrient;
