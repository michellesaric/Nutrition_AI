// import { useState } from "react";
// import AdminHeader from "../../components/AdminHeader/AdminHeader";
// import SearchIcon from "../../components/icons/SearchIcon";
// import SearchIngredients from "../../components/SearchIngredients/SearchIngredients";

// const AdminAddIngredient = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [fdcIngredient, setFdcIngredient] = useState("");
//   return (
//     <>
//       <AdminHeader />
//       <main className="admin-add-ingredient">
//         <div className="admin-add-ingredient__wrapper">
//           <div className="admin-add-ingredient__title-wrapper">
//             <h1 className="admin-add-ingredient__title">Add Ingredient</h1>
//           </div>
//           <div className="add-recipe-step-two__wrapper">
//             <div className="add-recipe-step-two__search-fdc-ingredients">
//               <SearchIcon />
//               <input
//                 className="add-recipe-step-two__ingredients-input"
//                 placeholder="Search ingredients"
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 value={searchTerm}
//               />
//             </div>
//             <div className="add-recipe-step-two__search-existing-ingredients">
//               <SearchIcon />
//               <input
//                 className="add-recipe-step-two__ingredients-input"
//                 placeholder="Search existing ingredients"
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 value={searchTerm}
//               />
//             </div>
//           </div>
//           {searchTerm && (
//             <SearchIngredients
//               searchTerm={searchTerm}
//               handleSaveIngredient={handleSaveIngredient}
//             />
//           )}
//         </div>
//       </main>
//     </>
//   );
// };

// export default AdminAddIngredient;

const AdminAddIngredient = () => {
  return <div>AdminAddIngredient</div>;
};

export default AdminAddIngredient;
