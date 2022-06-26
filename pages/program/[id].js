/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import PageBanner from "../../src/components/PageBanner";
import { useEffect, useState } from "react";
import { RightArrow } from "../../src/Icons";
import Layout from "../../src/layouts/Layout";
import { useRouter } from 'next/router'
import { getDetailProgram } from "../../src/actions/program.actions";
import { useDispatch } from "react-redux";

const ProgramsDetails = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [data, SetData] = useState({});


  useEffect(() => {
    dispatch(getDetailProgram(parseInt(window.location.href.split('program/')[1]))).then(data => {
      SetData(data)
    })
      .catch(error => {
        console.log('error', error);
      })
  }, [])


  return (
    <Layout bodyClass={"program-details"}>
      <PageBanner pageName={"Detail Program"} pageTitle={"Detail Program"} />
      <section className="tf-section tf-program-details">
        <img
          src="http://localhost:3000/assets/images/pattern/program_details1.png"
          alt=""
          className="bg1"
        />
        <img
          src="http://localhost:3000/assets/images/pattern/program_details2.png"
          alt=""
          className="bg2"
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-12 col-12">
              <div className="sc-program-content">
                <div className="title-heading">
                  <div className="sub-heading clr-pri-3 f-mulish">
                    <RightArrow />
                  </div>
                  <h2 className="title clr-pri-2">
                    {data?.program}
                  </h2>
                </div>
                <div className="wrap-box">
                  <p className="f-mulish st-1">
                    {data?.description}
                  </p>
                  <div className="icon" />
                </div>
                <div className="tf-img-box fx">
                  <div className="content">
                    <h5>{data?.author}</h5>
                    <p className="f-mulish">{data?.position}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12 col-12">
              <div
                className="image text-right p-t15 tab-l-100 wow fadeInRight animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <img src={data?.cover} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ProgramsDetails;
