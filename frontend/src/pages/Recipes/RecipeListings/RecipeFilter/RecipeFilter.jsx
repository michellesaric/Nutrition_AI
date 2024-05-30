import useFetchCategories from "../../../../apiHooks/useFetchingCategories";
import CategorySection from "../../../../components/CategorySection/CategorySection";

const RecipeFilter = ({ selectedCategories, setSelectedCategories }) => {
  const { categories, error } = useFetchCategories();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleCategoryClick = (categoryId) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
  };

  const bakedGoods = categories.filter((category) => category.id === 8);
  const beverages = categories.filter((category) => category.id === 7);
  const courses = categories.filter((category) =>
    [1, 3, 4, 9].includes(category.id)
  );
  const lightMeals = categories.filter((category) =>
    [2, 5, 6].includes(category.id)
  );

  return (
    <div className="recipe-filter">
      <h3 className="recipe-filter__title">Filter by:</h3>
      <p className="recipe-filter__active-filters">
        {selectedCategories.length} filters active
      </p>
      <div className="recipe-filter__categories">
        <CategorySection
          title="Baked goods"
          categories={bakedGoods}
          selectedCategories={selectedCategories}
          handleCategoryClick={handleCategoryClick}
        />
        <CategorySection
          title="Beverages"
          categories={beverages}
          selectedCategories={selectedCategories}
          handleCategoryClick={handleCategoryClick}
        />
        <CategorySection
          title="Course"
          categories={courses}
          selectedCategories={selectedCategories}
          handleCategoryClick={handleCategoryClick}
        />
        <CategorySection
          title="Light Meals"
          categories={lightMeals}
          selectedCategories={selectedCategories}
          handleCategoryClick={handleCategoryClick}
        />
      </div>
      <button className="recipe-filter__button" onClick={handleClearAll}>
        Clear all
      </button>
    </div>
  );
};

export default RecipeFilter;
