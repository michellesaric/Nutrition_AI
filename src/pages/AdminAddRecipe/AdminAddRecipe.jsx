import { useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AddRecipeStepOne from "./AddRecipeStepOne/AddRecipeStepOne";
import AddRecipeStepTwo from "./AddRecipeStepTwo/AddRecipeStepTwo";
import AddRecipeStepThree from "./AddRcipeStepThree/AddRecipeStepThree";

const AdminAddRecipe = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    recipe: "",
    recipeHr: "",
    url: "",
    author: "",
    description: "",
    prepTime: "",
    cookTime: "",
    readyTime: "",
    categoryId: null,
    ingredient: [],
    instructions: [],
  });

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <AddRecipeStepOne formData={formData} setFormData={setFormData} />
        );
      case 2:
        return (
          <AddRecipeStepTwo formData={formData} setFormData={setFormData} />
        );
      case 3:
        return (
          <AddRecipeStepThree formData={formData} setFormData={setFormData} />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <AdminHeader />
      <main className="admin-add-recipe">
        <section className="admin-add-recipe__wrapper">
          <div className="admin-add-recipe__title-wrapper">
            <h1 className="admin-add-recipe__title">New Recipe</h1>
            <div className="admin-add-recipe__steps-wrapper">
              <div>
                <p className="admin-add-recipe__step-name">Step 1</p>
                <div
                  className="admin-add-recipe__step"
                  style={{
                    background: currentStep === 1 ? "#F89E52" : "#2A8460",
                  }}
                ></div>
              </div>
              <div>
                <p className="admin-add-recipe__step-name">Step 2</p>
                <div
                  className="admin-add-recipe__step"
                  style={{
                    background:
                      currentStep === 1
                        ? "#DFDFDF"
                        : currentStep === 2
                        ? "#F89E52"
                        : "#2A8460",
                  }}
                ></div>
              </div>
              <div>
                <p className="admin-add-recipe__step-name">Step 3</p>
                <div
                  className="admin-add-recipe__step"
                  style={{
                    background: currentStep <= 2 ? "#DFDFDF" : "#F89E52",
                  }}
                ></div>
              </div>
            </div>
          </div>
          {renderStep()}
          <div
            className="admin-add-recipe__buttons"
            style={{
              justifyContent: currentStep === 1 ? "flex-end" : "space-between",
            }}
          >
            {currentStep > 1 && (
              <button className="admin-add-recipe__button" onClick={prevStep}>
                Previous
              </button>
            )}
            {currentStep < 3 && (
              <button className="admin-add-recipe__button" onClick={nextStep}>
                Next
              </button>
            )}
            {currentStep === 3 && (
              <button
                className="admin-add-recipe__button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default AdminAddRecipe;
