import React, { useState, useEffect } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the server
    let isMounted = true; // Flag to track component mount status

    fetch(
      "http://localhost:80/Nutrition_AI/backend/public/index.php/get-categories"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Get the response body text
      })
      .then((data) => {
        if (isMounted) {
          console.log(data.data);
          setCategories(data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      isMounted = false; // Update mounted flag on component unmount
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories &&
          categories.map((category) => (
            <li key={category.id}>{category.category}</li>
          ))}
      </ul>
    </div>
  );
};

export default CategoryList;
