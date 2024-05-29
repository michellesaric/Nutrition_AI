import Header from "../../components/Header/Header";
import Notification from "./Notification/Notification";
import Title from "./Title/Title";

const RecipeList = () => {
  return (
    <div className="recipe-list">
      <Header />
      <main className="recipe-list__main">
        <Notification />
        <Title />
      </main>
    </div>
  );
};

export default RecipeList;
