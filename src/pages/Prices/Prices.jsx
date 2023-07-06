import React from "react";
import Layout from "../../components/Layout/Layout";
import arrow from "../../assets/image/otherImages/arrow-right.svg";
import "./Prices.scss";

const Prices = () => {
  return (
    <>
      <Layout title={"Prices Page"}>
        <section className="prices container-fluid">
          <div className="prices__wrap">
            <h3 className="prices__title">Technical services</h3>
            <div className="prices__line"></div>
            <div className="prices__box">
              <div className="prices__box-txts">
                <h2 className="prices__title1">Prices</h2>
                <p className="prices__text">
                  Here you can see our works and maybe they will be inspiring
                  for you
                </p>
              </div>
              <ul className="prices__list">
                <li className="prices__item">
                  <div className="prices__item-left">
                    <h4 className="prices__title-left">Name of the service</h4>
                    <button className="prices__btn">
                      <p className="prices__btn-text">Start project</p>
                      <img src={arrow} alt="arrow-right" />
                    </button>
                  </div>
                  <div className="prices__item-right">
                    <h4 className="prices__title-right">Name of the service</h4>
                    <p className="prices__text-right">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <strong className="prices__price">100 $</strong>
                  </div>
                </li>
                <li className="prices__item">
                  <div className="prices__item-left">
                    <h4 className="prices__title-left">Name of the service</h4>
                    <button className="prices__btn">
                      <p className="prices__btn-text">Start project</p>
                      <img src={arrow} alt="arrow-right" />
                    </button>
                  </div>
                  <div className="prices__item-right">
                    <h4 className="prices__title-right">Name of the service</h4>
                    <p className="prices__text-right">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <strong className="prices__price">100 $</strong>
                  </div>
                </li>
                <li className="prices__item">
                  <div className="prices__item-left">
                    <h4 className="prices__title-left">Name of the service</h4>
                    <button className="prices__btn">
                      <p className="prices__btn-text">Start project</p>
                      <img src={arrow} alt="arrow-right" />
                    </button>
                  </div>
                  <div className="prices__item-right">
                    <h4 className="prices__title-right">Name of the service</h4>
                    <p className="prices__text-right">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <strong className="prices__price">100 $</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Prices;
