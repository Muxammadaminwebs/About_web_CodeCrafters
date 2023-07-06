import React from "react";
import "./styleHeader.scss";
import { Link } from "react-router-dom";
import headerStartProjectBtnIcon from "../../assets/image/logoIconImages/headerStartProjectIcon.svg";
const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <nav className="nav">
            <Link to={"/"}>
              <h2 className="logoHome">CodeCrafters</h2>
            </Link>

            <div className="headerLinksWrapp">
              <span className="headerLinkItemWrap">
                <Link className="headerLinkItem" to={"/about"}>About</Link>
              </span>
              <span className="headerLinkItemWrap">
                <Link className="headerLinkItem" to={"/works"}>Works</Link>
              </span>
              <span className="headerLinkItemWrap">
                <Link className="headerLinkItem" to={"/prices"}>Service</Link>
              </span>
              <span className="headerLinkItemWrap">
                <Link className="headerLinkItem" to={"/contact"}>Contact</Link>
              </span>
              <span className="headerLinkItemWrap">
                <Link 
                  to={"/contact"}
                  className="startProjectBtn d-flex align-items-center me-1"
                >
                  Start Project{" "}
                  <img
                    className="startProjectBtnImage ms-2"
                    src={headerStartProjectBtnIcon}
                    alt="start-project-button"
                  />
                </Link>
              </span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
