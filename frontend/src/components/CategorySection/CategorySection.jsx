const CategorySection = ({
  title,
  categories,
  selectedCategories,
  handleCategoryClick,
}) => (
  <div>
    <h5 className="recipe-filter__category-title">{title}</h5>
    {categories.map((category) => (
      <div key={category.id} className="recipe-filter__category-wrapper">
        <div
          className={`recipe-filter__checkmark-box ${
            selectedCategories.includes(category.id) ? "checked" : ""
          }`}
          onClick={() => handleCategoryClick(category.id)}
        >
          {selectedCategories.includes(category.id) ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6668 5L7.50016 14.1667L3.3335 10"
                stroke="#2A8460"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            ""
          )}
        </div>
        <p className="recipe-filter__category">{category.category}</p>
      </div>
    ))}
  </div>
);

export default CategorySection;
