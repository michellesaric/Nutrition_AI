import React from "react";
import useFetchCategories from "../../apiHooks/useFetchingCategories";

const CategoryList = ({ setCategory, setIsToggled, formData, setFormData }) => {
  const { categories } = useFetchCategories();
  const handleSaveCategory = (category) => {
    setCategory(category.category);
    setFormData({ ...formData, cateogryId: category.id });
    setIsToggled(false);
  };
  return (
    <div className="category-list">
      {categories.map((category) => {
        return (
          <p
            onClick={() => handleSaveCategory(category)}
            className="category-list__category"
            key={category.id}
          >
            {category.category}
          </p>
        );
      })}
    </div>
  );
};

export default CategoryList;
