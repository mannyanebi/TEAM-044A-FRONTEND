import React, { useContext, Fragment } from "react";
import AuthContext from "../../../context/auth/authContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logoutUser, user } = authContext;
  const onLogout = () => logoutUser();

  const authLinks = (
    <Fragment>
      <li style={{ listStyle: "none", marginRight: "2px" }}>
        {user && user.map((u) => `Hello ${u.firstName}`)}
      </li>
      <li style={{ listStyle: "none" }}>
        <button onClick={onLogout} className="btn btn-info  my-sm-0">
          <i className="fas fa-sign-out-alt" />
          <span className="hide-sm">Logout</span>
        </button>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li style={{ listStyle: "none" }}>
        <Link to="/login" className="btn btn-outline-info my-2 mr-1 my-sm-0">
          Login
        </Link>
      </li>
      <li style={{ listStyle: "none" }}>
        <Link to="/signup" className="btn btn-info  my-sm-0">
          Get started
        </Link>
      </li>
    </Fragment>
  );
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand text-info font-weight-bold" to="/">
        MoneyGuard
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto"></ul>
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
  );
};

export default Navbar;
