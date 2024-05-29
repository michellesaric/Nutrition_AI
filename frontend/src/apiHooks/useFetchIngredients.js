import { useState, useEffect } from "react";

const useFetchIngredients = (searchString) => {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchString.trim() === "") {
      setIngredients([]);
      return;
    }

    const fetchIngredients = async () => {
      try {
        const response = await fetch(
          `http://localhost:80/Nutrition_AI/backend/public/index.php/get-ingredients?search=${encodeURIComponent(
            searchString
          )}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setIngredients(data.data); // Adjust based on your actual data structure
      } catch (err) {
        setError(err);
      }
    };

    fetchIngredients();
  }, [searchString]);

  return { ingredients, error };
};

export default useFetchIngredients;
