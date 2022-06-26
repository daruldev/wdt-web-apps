import Link from "next/link";
import { useState } from "react";
import {
  About,
  Contact,
  Home,
  Pricing,
  Program,
} from "./Menus";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [subMenus, setSubMenus] = useState("");
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value),
    activeBtn = (value) => (value === activeMenu ? "active" : ""),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" },
    setSub = (value, motherMenu) =>
      motherMenu === activeMenu && value == subMenus
        ? setSubMenus("")
        : setSubMenus(value),
    activeSub = (value) =>
      value === subMenus ? { display: "block" } : { display: "none" };
  return (
    <header id="header" className="d-block d-xl-none">
      <div id="site-header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="site-header-inner fx">
                <div id="site-logo" className="clearfix">
                  <Link href="/">
                    <a className="logo">
                      <img src="assets/images/logo/logodark.png" alt="WDT" width="50" />
                    </a>
                  </Link>
                </div>
                <div
                  className="btn-menu"
                  style={{ display: "block" }}
                  onClick={() => setToggle(!toggle)}
                >
                  <span />
                </div>
                <div className="nav-wrap"></div>
                <div className="header-right fx">
                  <div id="header-search">
                    <a href="#" className="search-box header-search-icon">
                      <i className="far fa-search" />
                    </a>
                    <form
                      role="search"
                      method="get"
                      className="header-search-form"
                      action="#"
                    >
                      <input
                        type="text"
                        defaultValue=""
                        name="s"
                        className="header-search-field"
                        placeholder="Search..."
                      />
                      <button
                        type="submit"
                        className="header-search-submit"
                        title="Search"
                      >
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          id="mainnav-mobi"
          className="mainnav st-2"
          style={{ display: toggle ? "block" : "none" }}
        >
          <ul className="menu" id="mainnav">
            <li className="inner">
              <Home />
            </li>
            <li className="menu-item">
              <About />
            </li>
            <li className="sub-menu">
              <Pricing />
            </li>
            <li className="sub-menu">
              <Program />
            </li>
            <li className="inner">
              <Contact />
            </li>
          </ul>
          {/* /.menu */}
        </nav>
      </div>
      <div style={{ display: "none" }} />
    </header>
  );
};
export default MobileMenu;
