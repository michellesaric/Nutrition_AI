import { Link, useLocation } from "react-router-dom";
import UserIcon from "../icons/UserIcon";
import { useAuth } from "../../context/AuthContext";

const AdminHeader = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const isAdminDashboard = location.pathname === "/admin-dashboard";

  return (
    <header className="admin-header">
      <div className="admin-header__background"></div>
      <div className="admin-header__wrapper">
        <div className="admin-header__link-logo-wrapper">
          <Link to="/" className="admin-header__logo">
            recipix<span className="admin-header__logo-dot">.</span>
          </Link>
          {isAdminDashboard && (
            <div className="admin-header__link-wrapper">
              <Link to="/admin-add-recipe">
                <button className="admin-header__add-recipe-button">
                  Add recipe
                </button>
              </Link>
              <Link to="/admin-add-ingredient">
                <button className="admin-header__add-ingredient-button">
                  Add ingredient
                </button>
              </Link>
              <div onClick={logout} style={{ cursor: "pointer" }}>
                <UserIcon />
              </div>
            </div>
          )}
          {!isAdminDashboard && (
            <Link to="/admin-dashboard">
              <button className="admin-header__back-to-dashboard-button">
                Back to dashboard
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
