import React from "react";
import PlusIcon from "../../../components/icons/PlusIcon";

const AddRecipeStepThree = ({ formData, setFormData }) => {
  const handleAddStep = () => {
    if (formData.instructions.slice(-1)[0].instruction.trim() === "") {
      return;
    }

    const newInstruction = {
      id: formData.instructions.slice(-1)[0].id + 1,
      instruction: "",
    };

    setFormData((prevData) => ({
      ...prevData,
      instructions: [...prevData.instructions, newInstruction],
    }));
  };

  const handleChange = (id) => (e) => {
    const updatedInstructions = formData.instructions.map((instruction) => {
      if (instruction.id === id) {
        return { ...instruction, instruction: e.target.value };
      }
      return instruction;
    });

    setFormData((prevData) => ({
      ...prevData,
      instructions: updatedInstructions,
    }));
  };

  return (
    <div className="add-recipe-step-three">
      <h2 className="add-recipe-step-three__title">Add cooking steps</h2>
      {formData.instructions.map((instruction) => {
        return (
          <div key={instruction.id}>
            <h3 className="add-recipe-step-three__step">
              Step {instruction.id}
            </h3>
            <input
              className="add-recipe-step-three__input"
              placeholder="This is a placeholder"
              onChange={handleChange(instruction.id)}
              value={instruction.instruction}
            />
          </div>
        );
      })}
      <button
        className="add-recipe-step-three__button"
        onClick={() => handleAddStep()}
      >
        <PlusIcon color="#4a4995" />
        Add step
      </button>
    </div>
  );
};

export default AddRecipeStepThree;
