import { useState } from "react";
import InfoIcon from "../icons/InfoIcon";

const RecipeAdditionalInfo = ({ recipe }) => {
  const [toggle, setToggle] = useState([false, false, false, false]);

  const handleToggle = (index) => {
    setToggle((prevToggle) => {
      const newToggle = [...prevToggle];
      newToggle[index] = !newToggle[index];
      return newToggle;
    });
  };

  return (
    <div className="recipe__additional-info">
      <div className="recipe__additional-info-wrapper">
        <div className="recipe__additional-info-wrap">
          <div className="bullet-text-wrapper">
            <div className="recipe__additional-info-bullet"></div>
            <p className="recipe__additional-info-text">
              Global recipe score of NRF by WA Method{" "}
            </p>
          </div>
          <div
            className="recipe__additional-info-icon"
            onClick={() => handleToggle(0)}
          >
            <InfoIcon
              stroke={toggle[0] && "#5C61E1"}
              width="12px"
              height="12px"
            />
          </div>
        </div>
        <p className="recipe__additional-info-score">
          {recipe.cumulativeScore1}
        </p>
      </div>
      {toggle[0] && (
        <p className="recipe__additional-info-extra-text">
          Global recipe score of NRF based on Cogent Confabulation Method
          between (0,1)
        </p>
      )}
      <div className="recipe__additional-info-wrapper">
        <div className="recipe__additional-info-wrap">
          <div className="bullet-text-wrapper">
            <div className="recipe__additional-info-bullet"></div>
            <p className="recipe__additional-info-text">
              Global recipe score of NRF by CC Method{" "}
            </p>
          </div>
          <div
            className="recipe__additional-info-icon"
            onClick={() => handleToggle(1)}
          >
            <InfoIcon
              stroke={toggle[1] && "#5C61E1"}
              width="12px"
              height="12px"
            />
          </div>
        </div>
        <p className="recipe__additional-info-score">
          {recipe.cumulativeScore2}
        </p>
      </div>
      {toggle[1] && (
        <p className="recipe__additional-info-extra-text">
          Global recipe score of NRF based on Cogent Confabulation Method
          between (0,1)
        </p>
      )}
      <div className="recipe__additional-info-wrapper">
        <div className="recipe__additional-info-wrap">
          <div className="bullet-text-wrapper">
            <div className="recipe__additional-info-bullet blue"></div>
            <p className="recipe__additional-info-text">
              Nutrient Rich Score according to RACC{" "}
            </p>
          </div>
          <div
            className="recipe__additional-info-icon"
            onClick={() => handleToggle(2)}
          >
            <InfoIcon
              stroke={toggle[2] && "#5C61E1"}
              width="12px"
              height="12px"
            />
          </div>
        </div>
        <p className="recipe__additional-info-score">{recipe.nrf}</p>
      </div>
      {toggle[2] && (
        <p className="recipe__additional-info-extra-text">
          Global recipe score of NRF based on Cogent Confabulation Method
          between (0,1)
        </p>
      )}
      <div className="recipe__additional-info-wrapper">
        <div className="recipe__additional-info-wrap">
          <div className="bullet-text-wrapper">
            <div className="recipe__additional-info-bullet blue"></div>
            <p className="recipe__additional-info-text">
              Nutrient Rich Score according to 100 kcal{" "}
            </p>
          </div>
          <div
            className="recipe__additional-info-icon"
            onClick={() => handleToggle(3)}
          >
            <InfoIcon
              stroke={toggle[3] && "#5C61E1"}
              width="12px"
              height="12px"
            />
          </div>
        </div>
        <p className="recipe__additional-info-score">{recipe.nrf2}</p>
      </div>
      {toggle[3] && (
        <p className="recipe__additional-info-extra-text">
          Global recipe score of NRF based on Cogent Confabulation Method
          between (0,1)
        </p>
      )}
    </div>
  );
};

export default RecipeAdditionalInfo;
