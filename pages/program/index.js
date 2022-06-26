/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner from "../../src/components/PageBanner";
import PagginationFuntion from "../../src/components/PagginationFuntion";
import Layout from "../../src/layouts/Layout";
import { getPagination, pagination } from "../../src/utils";
import { getProgram } from "../../src/actions/program.actions";
import { useDispatch, useSelector } from "react-redux";


const Program = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  const program = useSelector(state => state.program)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProgram())
  }, [])


  useEffect(() => {
    if (!program.loading) {
      setPagination()
    }
  }, [program])

  function setPagination() {
    pagination(".single_box_", sort, active);
    let list = document.querySelectorAll(".single_box_");
    setstate(getPagination(list.length, sort));
  }

  useEffect(() => {
    setPagination()
  }, [active]);

  function renderProgram(params) {
    return params.data.map((val) => {
      return (
        <div className="col-md-6 single_box_">
          <div
            className="sc-program active wow fadeIn animated"
            data-wow-delay="0.5ms"
            data-wow-duration="1000ms"
          >
            <div className="content">
              <h3>
                <Link href={"/program/" + val.id}>
                  <a>{val.program}</a>
                </Link>
              </h3>
              <Link href={"/program/" + val.id}>
                <a className="fl-btn st-13">
                  <span className="inner">selengkapnya...</span>
                </a>
              </Link>
            </div>
            <div className="image">
              <img src={val.cover} alt="" />
            </div>
          </div>
        </div>
      );
    })
  }

  return (
    <Layout bodyClass={"pricing"}>
      <PageBanner pageName={"Program"} pageTitle={"Program"} />
      <section className="tf-section tf-program">
        <div className="container">
          <div className="row">
            {renderProgram(program)}
            <div className="col-md-12">
              <div
                className="themesflat-pagination style fx fx-style2"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <PagginationFuntion
                  setActive={setActive}
                  active={active}
                  state={state}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Program;
