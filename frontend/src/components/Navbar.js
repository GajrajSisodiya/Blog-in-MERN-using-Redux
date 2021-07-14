import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <header className="container">
        <span className="logo col-3 col-sm-3 ">
          <img src="https://img.icons8.com/ios/50/000000/peace-pigeon.png" />
        </span>
        <h2 className="col-lg-7 col-sm-9">Bestpeers Infosystem</h2>
        <span className="menu col-1 col-sm-1">
          {/* <img src="https://img.icons8.com/android/24/000000/menu.png" /> */}
          <div className="text-center">
            <a className="btn btn-outline-success">
              <Link to="/CreateBlog">Create blog</Link>
            </a>
          </div>
        </span>
      </header>
    </>
  );
}
export default Navbar;
