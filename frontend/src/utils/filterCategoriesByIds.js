export const filterCategoriesByIds = (categories, ids) => {
  return categories.filter((category) => ids.includes(category.id));
};
