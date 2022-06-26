/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderSearchForm from "../../components/HeaderSearchForm";
import Sidebar from "../../components/Sidebar";
import {
  About,
  Contact,
  Home,
  Pricing,
  Program,
} from "./Menus";

const Header2 = () => {
  useEffect(() => {
    document.querySelector("body").className =
      "counter-scroll header-fixed home2";
  }, []);
  const [form, setForm] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <header id="header" className="d-none d-xl-block header_main header2">
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
                <div className="btn-menu">
                  <span />
                </div>
                <div className="nav-wrap">
                  <nav id="mainnav" className="mainnav ">
                    <ul className="menu">
                      <li className="inner">
                        <Home />
                      </li>
                      <li className="menu-item">
                        <About />
                      </li>
                      <li className="inner">
                        <Program />
                      </li>
                      <li className="inner">
                        <Pricing />
                      </li>
                      <li className="inner">
                        <Contact />
                      </li>
                    </ul>
                    {/* /.menu */}
                  </nav>
                </div>
                <div className="header-right fx">
                  <div id="header-search">
                    <a
                      href="#"
                      className="search-box header-search-icon"
                      onClick={() => setForm(!form)}
                    >
                      <i className="far fa-search" />
                    </a>
                    <HeaderSearchForm
                      show={form}
                      handleClose={() => setForm(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar show={sidebarToggle} close={() => setSidebarToggle(false)} />
      </div>
      <div />
    </header>
  );
};
export default Header2;
