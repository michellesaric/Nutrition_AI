import { useState } from "react";
import ArrowDown from "../../../components/icons/ArrowDown";
import CategoryList from "../../../components/CategoryList/CategoryList";

const AddRecipeStepOne = ({ formData, setFormData }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [category, setCategory] = useState("");

  return (
    <section className="add-recipe-step-one">
      <h2 className="add-recipe-step-one__title">Recipe information</h2>
      <h3 className="add-recipe-step-one__text">Name - English</h3>
      <input
        className="add-recipe-step-one__input"
        placeholder="Name - English"
        onChange={(e) => setFormData({ ...formData, recipe: e.target.value })}
        value={formData.recipe}
      />
      <h3 className="add-recipe-step-one__text">Name - Croatian</h3>
      <input
        className="add-recipe-step-one__input"
        placeholder="Name - Croatian"
        onChange={(e) => setFormData({ ...formData, recipeHr: e.target.value })}
        value={formData.recipeHr}
      />
      <h3 className="add-recipe-step-one__text url-text">URL</h3>
      <p className="add-recipe-step-one__subtext">
        Paste the url source for the recipe
      </p>
      <input
        className="add-recipe-step-one__input"
        placeholder="URL"
        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
        value={formData.url}
      />
      <h3 className="add-recipe-step-one__text">Author</h3>
      <input
        className="add-recipe-step-one__input"
        placeholder="Author"
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        value={formData.author}
      />
      <h3 className="add-recipe-step-one__text">Description</h3>
      <input
        className="add-recipe-step-one__input"
        placeholder="Description"
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        value={formData.description}
      />
      <h3 className="add-recipe-step-one__text">Preping time</h3>
      <input
        className="add-recipe-step-one__input"
        placeholder="Preping time"
        onChange={(e) => setFormData({ ...formData, prepTime: e.target.value })}
        value={formData.prepTime}
      />
      <h3 className="add-recipe-step-one__text">Cooking time</h3>
      <input
        className="add-recipe-step-one__input"
        placeholder="Cooking time"
        onChange={(e) => setFormData({ ...formData, cookTime: e.target.value })}
        value={formData.cookTime}
      />
      <h3 className="add-recipe-step-one__text">Ready time</h3>
      <input
        className="add-recipe-step-one__input"
        placeholder="Ready time"
        onChange={(e) =>
          setFormData({ ...formData, readyTime: e.target.value })
        }
        value={formData.readyTime}
      />
      <h2 className="add-recipe-step-one__title">Recipe Category</h2>
      <div className="add-recipe-step-one__category-input">
        <input
          className="add-recipe-step-one__category"
          placeholder="Recipe category"
          value={category}
          disabled
        />
        <div
          onClick={() => setIsToggled((prevToggle) => !prevToggle)}
          style={{ transform: isToggled ? "rotate(180deg)" : "" }}
        >
          <ArrowDown />
        </div>
      </div>
      {isToggled && (
        <CategoryList
          setCategory={setCategory}
          setIsToggled={setIsToggled}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </section>
  );
};

export default AddRecipeStepOne;
