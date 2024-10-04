import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../actions/user.action";

import Logo from "../../assets/img/argentBankLogo.png";
import "./Navbar.scss";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Authentificate Management
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  const isAuthenticated = !!token;

  // Data Management
  const dataUser = useSelector((state) => state.user.userProfile);

  // LogOut Management
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut(navigate));
  };

  return (
    <>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        {isAuthenticated ? (
          <>
            <div className="main-nav-links">
              <NavLink to="/profile" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                {dataUser?.userName}
              </NavLink>

              <NavLink className="main-nav-item" onClick={handleLogOut}>
                <i className="fa fa-sign-out"></i>
                LogOut
              </NavLink>
            </div>
          </>
        ) : (
          <div>
            <NavLink to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
