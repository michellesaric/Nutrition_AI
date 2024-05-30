const RecipeActionsSort = ({ setSortString, setToggle }) => {
  const handleSaveParameter = (parameter) => {
    setSortString(parameter);
    setToggle(false);
  };

  const parameters = [
    "NRF RACC Reference Amount Customarily Consumed",
    "NRF 100 Calories",
    "Calories (kcal)",
    "Macronutrient Balance",
    "Cumulative Score by Weighted Average Method",
    "Cumulative Score by Cogent Confabulation Method",
  ];

  return (
    <div className="parameters-list">
      {parameters.map((parameter) => {
        return (
          <p
            key={parameter}
            className="parameter"
            onClick={() => handleSaveParameter(parameter)}
          >
            {parameter}
          </p>
        );
      })}
    </div>
  );
};

export default RecipeActionsSort;
