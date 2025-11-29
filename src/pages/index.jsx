import * as React from "react";
import CommonHead from '../components/commonhead';
import BGBase from "../components/bgbase";
import justlikenatureintended from "../images/just_like_nature_intended.jpg"
import BGTitle from "../components/bgtitle";
import doughbowl6wickcandleB from "../images/dough_bowl_6_wick_candle_B.jpg";
import woodgrain from "../images/wood_grain.jpg";
import doughbowl3wickcandleB from "../images/dough_bowl_3_wick_candle_B.jpg";
import BGSubtitle from "../components/bgsubtitle";
import tin2wickcandleB from "../images/tin_2_wick_candle_B.jpg";

const pageName = "Home";

const IndexPage = () => (
  <BGBase pageName={pageName} light>
    <div className="row position-relative d-none d-sm-block mb-3">
      <img src={justlikenatureintended} alt="" className="img-fluid" />
      <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
        <p className="lulo-clean-w01-one-bold-font" style={{ color: '#EDE9E1', fontWeight: 'bold', WebkitTextStroke: '1px #656565', fontSize: '48pt' }}>JUST LIKE NATURE INTENDED</p>
        <p className="space-grotesk-font" style={{ color: 'white', textShadow: '0px 0px 3px black', letterSpacing: '0.15em', fontSize: '20pt' }}>HAND POURED 100% SOY CANDLES</p>
      </div>
    </div>

    <BGTitle>SUSTAINABILITY</BGTitle>
    <div className="col-12 d-flex flex-wrap mb-3">
      <div className="col-12 col-sm-6 d-flex align-items-center space-grotesk-font">
        <div>
          <p className="fs-3">ALL-NATURAL PRODUCTS</p>
          <ul>
            <li>Natural Soy Wax</li>
            <li>Lead-Free Wicks</li>
            <li>No Dyes or Phthalates</li>
            <li>Dough Bowl Containers are Reusable & Recyclable</li>
          </ul>
        </div>
      </div>
      <img src={doughbowl6wickcandleB} alt="Dough Bowl 6 Wick Candle Image" className="col-12 col-sm-6 object-fit-cover" style={{ objectPosition: '100% 100%' }} width="399" height="327" />
    </div>

    <div className="col-12 position-relative d-none d-md-block space-grotesk-font mb-3" style={{ height: '500px' }}>
      <div className="position-absolute top-50 start-60 translate-middle position-relative" style={{ width: '400px', height: 'auto' }}>
        <img src={woodgrain} alt="Wood Grain Texture" className="img-fluid object-fit-cover" />
        <p className="position-absolute top-25 end-20 fs-2">RELAX</p>
        <p className="position-absolute top-45 end-10 fs-2">UNWIND</p>
        <p className="position-absolute top-65 end-20 fs-2">ENJOY</p>
      </div>

      <img src={doughbowl3wickcandleB} alt="Dough Bowl 3 Wick Candle Image" className="position-absolute top-50 end-40 translate-middle-y img-fluid object-fit-cover" style={{ width: '400px', height: 'auto' }} />
    </div>

    <BGTitle>NATURALLY SIMPLE</BGTitle>
    <div className="col-12 d-flex justify-content-center">
      <div className="col-12 col-sm-10 mb-3">
        <BGSubtitle>Our rustic and beautiful dough bowls are made from hand carved wood and are reusable and recyclable. Each bowl is unique and sizes may vary slightly.</BGSubtitle>
      </div>
    </div>
    <div className="col-12 position-relative d-flex flex-wrap justify-content-evenly space-grotesk-font">
      <img src={tin2wickcandleB} alt="Tin 2 Wick Candle Image" className="img-fluid col-5 d-none d-sm-block" />
      <div className="col-12 col-sm-5">
        <p className="fst-italic">“I absolutely love my candle! Amazing smell that fills my whole room! Great product! I will buy more!”</p>
        <p className="text-end"><small>Mandy, Atlanta</small></p>
      </div>
      <a href="/catalog" className="btn btn-primary position-absolute top-50 start-35 col-3 d-none d-md-block" role="button">SEE OUR CATALOG</a>
      <a href="/catalog" role="button" class="btn btn-primary col-6 d-block d-md-none mt-2">SEE OUR CATALOG</a>
    </div>
  </BGBase>
);

export default IndexPage;

export const Head = () => <CommonHead pageName={pageName} />;
