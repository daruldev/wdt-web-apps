import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import LatestProgramSlider from "../src/components/LatestProgramSlider";
import PageBanner from "../src/components/PageBanner";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";

const Pricing = () => {
  return (
    <Layout bodyClass={"pricing"}>
      <PageBanner pageName={"Paket Harga"} />
      <section className="tf-section tf-pricing">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-heading m-t27 b61">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <span className="inner-sub st-2">Paket Harga</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Kami Menyediakan Paket Harga Luar Biasa Untuk Belajar
                </h2>
              </div>
              {/*/.title-heading*/}
            </div>
            <div className="col-md-12">
              <Tab.Container defaultActiveKey={"bulanan"}>
                <div className="flat-tabs">
                  <Nav as={"ul"} className="menu-tab">
                    <Nav.Link as={"li"} eventKey={"bulanan"} className="month">
                      <span className="fl-btn st-9">
                        <span className="inner">bulanan</span>
                      </span>
                    </Nav.Link>
                    <Nav.Link as={"li"} eventKey={"year"} className="year">
                      <span className="fl-btn st-9">
                        <span className="inner">tahunan</span>
                      </span>
                    </Nav.Link>
                  </Nav>
                  <Tab.Content className="content-tab">
                    <Tab.Pane eventKey={"bulanan"}>
                      <div className="content-inner">
                        <div
                          className="sc-pricing m-b90 wow fadeIn animated"
                          data-wow-delay="0.3ms"
                          data-wow-duration="1200ms"
                        >
                          <div className="content">
                            <h4>Paket 1</h4>
                            <p className="f-mulish">
                              Sit amet, consectetur adipiscing elit sed eiusmod
                              tempor
                            </p>
                          </div>
                          <div className="pricing">
                            <span className="number">IDR 100k/</span>
                            <span>bulanan</span>
                          </div>
                          <ul className="list">
                            <li>
                              <span>Permainan</span>
                            </li>
                            <li>
                              <span>Program Terbaik</span>
                            </li>
                          </ul>
                          <Link href="/contact">
                            <a className="fl-btn st-9">
                              <span className="inner">Pilih paket</span>
                            </a>
                          </Link>
                        </div>
                        <div
                          className="sc-pricing style2 wow fadeIn animated"
                          data-wow-delay="0.3ms"
                          data-wow-duration="1200ms"
                        >
                          <ul className="fx start">
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                          </ul>
                          <div className="content">
                            <h4>Paket 2</h4>
                            <p className="f-mulish">
                              Sit amet, consectetur adipiscing elit sed eiusmod
                              tempor
                            </p>
                          </div>
                          <div className="pricing">
                            <span className="number">IDR 200k/</span>
                            <span>bulanan</span>
                          </div>
                          <ul className="list">
                            <li>
                              <span>Permainan</span>
                            </li>
                            <li>
                              <span>Program Terbaik</span>
                            </li>
                            <li>
                              <span>Transportasi Sekolah</span>
                            </li>
                          </ul>
                          <Link href="/contact">
                            <a className="fl-btn st-9">
                              <span className="inner">Pilih paket</span>
                            </a>
                          </Link>
                        </div>
                        <div
                          className="sc-pricing style3 wow fadeIn animated"
                          data-wow-delay="0.3ms"
                          data-wow-duration="1200ms"
                        >
                          <div className="content">
                            <h4>Paket 3</h4>
                            <p className="f-mulish">
                              Sit amet, consectetur adipiscing elit sed eiusmod
                              tempor
                            </p>
                          </div>
                          <div className="pricing">
                            <span className="number">IDR 300k/</span>
                            <span>bulanan</span>
                          </div>
                          <ul className="list">
                            <li>
                              <span>Permainan</span>
                            </li>
                            <li>
                              <span>Program Terbaik</span>
                            </li>
                            <li>
                              <span>Transportasi Sekolah</span>
                            </li>
                            <li>
                              <span>Paket Makan Siang</span>
                            </li>
                          </ul>
                          <Link href="/contact">
                            <a className="fl-btn st-9">
                              <span className="inner">Pilih paket</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={"year"}>
                      <div className="content-inner">
                        <div
                          className="sc-pricing m-b90 wow fadeIn animated"
                          data-wow-delay="0.3ms"
                          data-wow-duration="1200ms"
                        >
                          <div className="content">
                            <h4>Paket 4</h4>
                            <p className="f-mulish">
                              Sit amet, consectetur adipiscing elit sed eiusmod
                              tempor
                            </p>
                          </div>
                          <div className="pricing">
                            <span className="number">IDR 1000k/</span>
                            <span>tahunan</span>
                          </div>
                          <ul className="list">
                            <li>
                              <span>Permainan</span>
                            </li>
                            <li>
                              <span>Program Terbaik</span>
                            </li>
                            <li>
                              <span>Tour Tahunan</span>
                            </li>
                          </ul>
                          <Link href="/contact">
                            <a className="fl-btn st-9">
                              <span className="inner">Pilih paket</span>
                            </a>
                          </Link>
                        </div>
                        <div
                          className="sc-pricing style2 wow fadeIn animated"
                          data-wow-delay="0.3ms"
                          data-wow-duration="1200ms"
                        >
                          <ul className="fx start">
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star" />
                              </span>
                            </li>
                          </ul>
                          <div className="content">
                            <h4>Paket 5</h4>
                            <p className="f-mulish">
                              Sit amet, consectetur adipiscing elit sed eiusmod
                              tempor
                            </p>
                          </div>
                          <div className="pricing">
                            <span className="number">IDR 2000k/</span>
                            <span>tahunan</span>
                          </div>
                          <ul className="list">
                            <li>
                              <span>Permainan</span>
                            </li>
                            <li>
                              <span>Program Terbaik</span>
                            </li>
                            <li>
                              <span>Tour Tahunan</span>
                            </li>
                            <li>
                              <span>Transportasi Sekolah</span>
                            </li>
                          </ul>
                          <Link href="/contact">
                            <a className="fl-btn st-9">
                              <span className="inner">Pilih paket</span>
                            </a>
                          </Link>
                        </div>
                        <div
                          className="sc-pricing style3 wow fadeIn animated"
                          data-wow-delay="0.3ms"
                          data-wow-duration="1200ms"
                        >
                          <div className="content">
                            <h4>Paket 6</h4>
                            <p className="f-mulish">
                              Sit amet, consectetur adipiscing elit sed eiusmod
                              tempor
                            </p>
                          </div>
                          <div className="pricing">
                            <span className="number">IDR 3000k/</span>
                            <span>tahunan</span>
                          </div>
                          <ul className="list">
                            <li>
                              <span>Permainan</span>
                            </li>
                            <li>
                              <span>Program Terbaik</span>
                            </li>
                            <li>
                              <span>Tur Tahunan</span>
                            </li>
                            <li>
                              <span>Transportasi Sekolah</span>
                            </li>
                            <li>
                              <span>Paket Makan Siang</span>
                            </li>
                          </ul>
                          <Link href="/contact">
                            <a className="fl-btn st-9">
                              <span className="inner">Pilih paket</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Pricing;
