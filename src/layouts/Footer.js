/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="widget-footer">
                <div className="widget widget-logo">
                  <div className="logo-bottom" id="logo-footer">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/logo/logofootert.png"
                          alt="WDT"
                          width="150"
                        />
                      </a>
                    </Link>
                  </div>
                  <p className="wrap f-mulish">
                    Sit amet consectetur adipiscing elit sed do eiusmod teminci
                    idunt ut labore et dolore magna
                  </p>
                  <div className="list-contact">
                    <ul>
                      <li className="fx">
                        <span>
                          <i className="far fa-map-marker-alt" />Jl. Batu Indah Raya No.40
                        </span>
                      </li>
                      <li className="fx">
                        <a href="mailto:kindergarten@whalez.tech">
                          <i className="far fa-envelope" /> kindergarten@whalez.tech
                        </a>
                      </li>
                      <li className="fx">
                        <a href="tel:012345678">
                          <i className="fal fa-phone" /> +62 813-8478-7237
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-link">
                  <h4 className="title-widget">Program Kami</h4>
                  <ul className="list-link">
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Seni & Menggambar</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Teknik Komputer </a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Matematika Digital</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Latihan fisik</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Ilmu Umum</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Bahasa Inggris Dasar</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Ilmu kemasyarakatan</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-news st-3">
                  
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-bottom jus-ct">
                <p className="copy-right">
                  Copyright © {new Date().getFullYear()}, WDT - Kindergarten
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
