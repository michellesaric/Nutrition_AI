import React from "react";
import { units } from "./const";
import { convertSnakeCase } from "../../utils/convertSnakeCase";

const UnitModal = ({ handleUnitSelect }) => {
  return (
    <div className="unit-modal">
      {units.map((unit) => {
        return (
          <p
            key={unit.id}
            className="unit-modal__unit-name"
            onClick={() => handleUnitSelect(unit.unit)}
          >
            {convertSnakeCase(unit.unit)} ({unit.unitHr})
          </p>
        );
      })}
    </div>
  );
};

export default UnitModal;
