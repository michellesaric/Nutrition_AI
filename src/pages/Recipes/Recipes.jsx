import Header from "../../components/Header/Header";
import Notification from "./Notification/Notification";
import Title from "./Title/Title";
import RecipeListings from "./RecipeListings/RecipeListings";

const Recipes = () => {
  return (
    <div className="recipes">
      <Header />
      <main className="recipes__main">
        <Notification />
        <Title />
        <RecipeListings />
      </main>
    </div>
  );
};

export default Recipes;
