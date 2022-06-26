/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TfCounter from "../src/components/TfCounter";
import {
  LeftArrow,
  RightArrow,
} from "../src/Icons";
import HeaderHome from "../src/layouts/header/HeaderHome";
import Layout from "../src/layouts/Layout";
import { heroSlider } from "../src/SliderProps";
import { activeNavMenu } from "../src/utils";

const Index2 = () => {
  useEffect(() => {
    activeNavMenu();
  }, []);

  return (
    <Layout noHeader bodyClass={"home2"}>
      <HeaderHome />
      <section className="tf-slider-2">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="slider-2">
                <div className="themesflat-carousel clearfix">
                  <Swiper
                    {...heroSlider}
                    className="owl-carousel owl-theme none dots-none"
                  >
                    <SwiperSlide>
                      <div className="item-slider-2">
                        <div className="box-content">
                          <div className="sub f-rubik clr-pri-3">
                            WDT Kindergarten
                          </div>
                          <div className="title clr-pri-2">
                            TK Berkualitas & Berintegritas
                          </div>
                          <p className="wrap f-rubik">
                            Sit amet consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna
                          </p>
                          <div className="btn-slider">
                            <Link href="/about">
                              <a className="fl-btn st-2">
                                <span className="inner">Pelajari Lebih Lanjut</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="box-feature">
                          <div className="image">
                            <img
                              src="assets/images/common/slider-2.jpg"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>{" "}
                    <SwiperSlide>
                      <div className="item-slider-2">
                        <div className="box-content">
                          <div className="sub f-rubik clr-pri-3">
                            WDT Kindergarten
                          </div>
                          <div className="title clr-pri-2">
                            Kami Menerapkan Metode Terbaik
                          </div>
                          <p className="wrap f-rubik">
                            Sit amet consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna
                          </p>
                          <div className="btn-slider">
                            <Link href="/about">
                              <a className="fl-btn st-2">
                                <span className="inner">Pelajari Lebih Lanjut</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="box-feature">
                          <div className="image">
                            <img
                              src="assets/images/common/slider-3.jpg"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/*/.themesflat-carousel*/}
              </div>
              {/*/.slider-2*/}
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section-top tf-discovery">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-2">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Siapa Kami</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Temukan Sekarang Mengapa Orang Menggunakan WDT Kindergarten
                </h2>
              </div>
            </div>
            <div className="col-12">
              <div className="fl-discovery">
                <div
                  className="sc-discovery wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="800ms"
                >
                  <div className="inner-discovery">
                    <div className="box-icon st-1">
                      <i className="fas fa-check" />
                    </div>
                    <h5 className="title">
                      <Link href="/about">
                        <a>Belajar & Bermain</a>
                      </Link>
                    </h5>
                    <Link href="/about">
                      <a className="fl-btn st-10">
                        <span className="inner">selengkapnya...</span>
                      </a>
                    </Link>
                  </div>
                </div>
                {/*/.sc-discovery*/}
                <div
                  className="sc-discovery wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <div className="inner-discovery">
                    <div className="box-icon st-2">
                      <i className="fas fa-check" />
                    </div>
                    <h5 className="title">
                      <Link href="/about">
                        <a>Memiliki Banyak Program</a>
                      </Link>
                    </h5>
                    <Link href="/about">
                      <a className="fl-btn st-10">
                        <span className="inner">selengkapnya...</span>
                      </a>
                    </Link>
                  </div>
                </div>
                {/*/.sc-discovery*/}
                <div
                  className="sc-discovery wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <div className="inner-discovery">
                    <div className="box-icon st-3">
                      <i className="fas fa-check" />
                    </div>
                    <h5 className="title">
                      <Link href="/about">
                        <a>Guru Yang Berkualitas</a>
                      </Link>
                    </h5>
                    <Link href="/about">
                      <a className="fl-btn st-10">
                        <span className="inner">selengkapnya...</span>
                      </a>
                    </Link>
                  </div>
                </div>
                {/*/.sc-discovery*/}
                <div
                  className="sc-discovery wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1400ms"
                >
                  <div className="inner-discovery">
                    <div className="box-icon st-4">
                      <i className="fas fa-check" />
                    </div>
                    <h5 className="title">
                      <Link href="/about">
                        <a>Melatih Mental Belajar</a>
                      </Link>
                    </h5>
                    <Link href="/about">
                      <a className="fl-btn st-10">
                        <span className="inner">selengkapnya...</span>
                      </a>
                    </Link>
                  </div>
                </div>
                {/*/.sc-discovery*/}
                <div
                  className="sc-discovery wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1600ms"
                >
                  <div className="inner-discovery">
                    <div className="box-icon st-5">
                      <i className="fas fa-check" />
                    </div>
                    <h5 className="title">
                      <Link href="/about">
                        <a>Rekreasi & Belajar</a>
                      </Link>
                    </h5>
                    <Link href="/about">
                      <a className="fl-btn st-10">
                        <span className="inner">selengkapnya...</span>
                      </a>
                    </Link>
                  </div>
                </div>
                {/*/.sc-discovery*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-sc-about2">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12 col-12">
              <div className="feature-about2">
                <img
                  src="assets/images/common/sc-aboutus-2.jpg"
                  alt="Image"
                  className="wow fadeInLeft animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-12">
              <div className="sc-about-2">
                <div className="title-heading">
                  <div className="sub-heading clr-pri-3 f-mulish">
                    <span className="inner-sub st-2">Tentang Kami</span>
                    <RightArrow />
                  </div>
                  <h2 className="title clr-pri-2">
                    Kami Belajar Cara Cerdas Membangun Masa Depan Cerah
                  </h2>
                </div>
                <div className="inner">
                  <p
                    className="wrap f-mulish clr-pri-4  wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    Amet consectetur adipiscin elitsed eiusmod tempor incididunt
                    labore et dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravida. Risus commodo maecenas accumsan
                  </p>
                  <ul>
                    <li className="st-1 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Permainan</p>
                    </li>
                    <li className="st-2 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Aktivitas Olahraga</p>
                    </li>
                    <li className="st-3 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Makanan Bergizi</p>
                    </li>
                    <li className="st-4 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Melatih Mental</p>
                    </li>
                  </ul>
                  <Link href="/about">
                    <a className="fl-btn st-11">
                      <span className="inner">Pelajari Lebih Lanjut</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TfCounter nonst />
      <section className="tf-section tf-service">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-1 f-mulish">
                  <span className="inner-sub st-1">Apa Yang Kita Tawarkan </span>
                </div>
                <h2 className="title clr-pri-1">
                  Kami Menyediakan Program Luar Biasa Untuk Membangun Masa Depan yang Cerah
                </h2>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-service st-3 fl-scale wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="800ms"
              >
                <div className="box-feature inner-scale">
                  <img
                    src="assets/images/common/sc-service-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/program">
                      <a className="clr-pri-1">Seni & Menggambar</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">
                    Quis autem vel eum rehenderit
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-service st-4 fl-scale wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="box-feature inner-scale">
                  <img
                    src="assets/images/common/sc-service-2.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/program">
                      <a className="clr-pri-1">Bahasa Dasar</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">
                    Quis autem vel eum rehenderit
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-service fl-scale wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature inner-scale">
                  <img
                    src="assets/images/common/sc-service-3.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/program">
                      <a className="clr-pri-1">Pendidikan luar biasa</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">
                    Quis autem vel eum rehenderit
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-service st-2 fl-scale wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1400ms"
              >
                <div className="box-feature inner-scale">
                  <img
                    src="assets/images/common/sc-service-4.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/program">
                      <a className="clr-pri-1">Musik, Video & Film</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">
                    Quis autem vel eum rehenderit
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-service st-3 fl-scale wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="800ms"
              >
                <div className="box-feature inner-scale">
                  <img
                    src="assets/images/common/sc-service-5.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/program">
                      <a className="clr-pri-1">Pesta ulang tahun</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">
                    Quis autem vel eum rehenderit
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-service st-4 fl-scale wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <div className="box-feature inner-scale">
                  <img
                    src="assets/images/common/sc-service-6.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/program">
                      <a className="clr-pri-1">Gaya Hidup & Makanan</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">
                    Quis autem vel eum rehenderit
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-service fl-scale wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature inner-scale">
                  <img
                    src="assets/images/common/sc-service-7.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/program">
                      <a className="clr-pri-1">Latihan fisik</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">
                    Quis autem vel eum rehenderit
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-service st-2 fl-scale wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1400ms"
              >
                <div className="box-feature inner-scale">
                  <img
                    src="assets/images/common/sc-service-8.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/program">
                      <a className="clr-pri-1">Ruang Aktivitas</a>
                    </Link>
                  </h4>
                  <p className="sub f-mulish clr-pri-1">
                    Quis autem vel eum rehenderit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-sc-about1">
        <div className="container">
          <div className="row d-flex justify-content-end">
            <div className="col-xl-6 col-lg-8 col-md-12 col-12">
              <div
                className="sc-about-1 wow fadeInLeft animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1400ms"
              >
                <div className="title-heading">
                  <div className="sub-heading clr-pri-3 f-mulish">
                    <span className="inner-sub st-2">Mengapa Memilih Kami</span>
                    <RightArrow />
                  </div>
                  <h2 className="title clr-pri-2">
                    25 Tahun Pengalaman Dalam Pendidikan!
                  </h2>
                </div>
                <div className="inner">
                  <p className="wrap f-mulish clr-pri-4">
                    Sit amet consectetur adipiscing eiusmod tempor incididunts
                    ut labore et dolores magna aliqua suspendisse
                  </p>
                  <ul>
                    <li className="st-1 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Keterampilan dan Hasil Terbaik</p>
                    </li>
                    <li className="st-2 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Tingkat Putus Sekolah Rendah</p>
                    </li>
                    <li className="st-3 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Pengalaman Guru</p>
                    </li>
                    <li className="st-4 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Kegiatan di luar ruangan</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index2;
