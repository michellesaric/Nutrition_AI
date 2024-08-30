import { useState, useEffect } from "react";

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:80/backend/public/index.php/get-categories"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (isMounted) {
          setCategories(data.data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
        }
      }
    };

    fetchCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  return { categories, error };
};

export default useFetchCategories;
