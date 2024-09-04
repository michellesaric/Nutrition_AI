import React from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import TBDIcon from "../../components/icons/TBDIcon";
import EditIcon from "../../components/icons/EditIcon";
import ExitIcon from "../../components/icons/ExitIcon";

const AdminDashboard = () => {
  const recipes = [
    "Recipe One",
    "Recipe Two",
    "Recipe Three",
    "Recipe Four",
    "Recipe Five",
    "Recipe Six",
    "Recipe Seven",
    "Recipe Eight",
    "Recipe Nine",
  ];
  return (
    <div className="admin">
      <AdminHeader />
      <div className="admin-dashboard__wrapper">
        <div className="admin-dashboard__statistics">
          <div className="admin-dashboard__statistics-wrapper">
            <h3 className="admin-dashboard__statistics-title">Recipes</h3>
            <h3 className="admin-dashboard__statistics-count">In total: 433</h3>
          </div>
        </div>

        {recipes.map((recipe, index) => {
          return (
            <div
              className="admin-dashboard__recipe-table-member"
              key={index}
              style={{
                background: index % 2 === 0 && "#FFFFFF",
              }}
            >
              <p className="admin-dashboard__recipe-table-recipe-title">
                {recipe}
              </p>
              <div className="admin-dashboard__recipe-table-button-wrapper">
                <button className="admin-dashboard__recipe-table-button view-button">
                  <TBDIcon />
                  View
                </button>
                <button className="admin-dashboard__recipe-table-button edit-button">
                  <EditIcon />
                  Edit
                </button>
                <button className="admin-dashboard__recipe-table-button delete-button">
                  <ExitIcon color="#f89e52" />
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
