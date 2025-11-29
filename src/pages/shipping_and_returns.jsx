import * as React from "react";
import CommonHead from '../components/commonhead';
import BGBase from "../components/bgbase";
import BGTitle from "../components/bgtitle";

const pageName = "Shipping & Fragrances";

const ShippingAndFragrancesPage = () => (
  <BGBase pageName={pageName} center>
    <div className="row col-12 col-md-10 col lg-8">
      <BGTitle>SHIPPING & RETURNS</BGTitle>
      <p className="fs-3">SHIPPING POLICY</p>
      <p>Each candle is carefully packaged using kraft boxes and biodegradable peanuts. It can take 1-3 business days before your items ship. Unfortunately we have no control over USPS and how long it will actually take to get to you. Usually they are on time but presently, due to the pandemic, shipping is taking a little longer.</p>
      <p class="fs-3">RETURN & EXCHANGE POLICY</p>
      <p>Due to the nature of our product, returns are not accepted unless they are defective or damaged. Photographic proof of the defect or damage due to shipping is required within 7 days of receiving the item or items. Once reviewed we will determine if a refund or exchange is required. Used candles cannot be returned or refunded.</p>
    </div>
  </BGBase>
);

export default ShippingAndFragrancesPage;

export const Head = () => <CommonHead pageName={pageName} />;