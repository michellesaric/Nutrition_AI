import { useState } from "react";
import RecipeFilter from "./RecipeFilter/RecipeFilter";
import RecipeActions from "./RecipeActions/RecipeActions";

const RecipeListings = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortString, setSortString] = useState("");

  return (
    <div>
      <RecipeActions sortString={sortString} setSortString={setSortString} />
      <RecipeFilter
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    </div>
  );
};

export default RecipeListings;
