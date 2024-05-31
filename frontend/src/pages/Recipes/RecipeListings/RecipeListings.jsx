import { useState } from "react";
import RecipeFilter from "./RecipeFilter/RecipeFilter";
import RecipeActions from "./RecipeActions/RecipeActions";
import RecipeList from "./RecipeList/RecipeList";

const RecipeListings = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortString, setSortString] = useState("");

  return (
    <div>
      <RecipeActions sortString={sortString} setSortString={setSortString} />
      <div className="recipe-listings">
        <RecipeFilter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <RecipeList />
      </div>
    </div>
  );
};

export default RecipeListings;
