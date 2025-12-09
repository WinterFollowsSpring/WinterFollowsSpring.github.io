import * as React from "react";
import CommonHead from '../components/commonhead';
import BGBase from "../components/bgbase";

const pageName = "Store Policy";

const StorePolicyPage = () => (
  <BGBase pageName={pageName} center>
    <div className="row col-12 col-md-10 col-lg-8">
      <p class="fs-3">PRIVACY POLICY</p>
      <p>Bonnie Glen Luxury Candles & Gifts LLC takes the privacy of our customer’s personal and financial information very seriously.  All information obtained by Bonnie Glen Luxury Candles during your transaction is held in the strictest of confidence.</p>
      
      <p class="fs-3">WHOLESALE INQUIRIES</p>
      <p>Please contact us at <a href="mailto:bonnieglenlcg@gmail.com?subject=Wholesale%20Inquiry" class="text-decoration-none">bonnieglenlcg@gmail.com</a> for more information about wholesale pricing.</p>

      <p class="fs-3">PAYMENT METHODS</p>
      <ul>
        <li><i class="bi bi-credit-card"></i> Credit / Debit Cards (Mastercard, Visa, American Express)</li>
        <li>Venmo</li>
      </ul>
    </div>
  </BGBase>
);

export default StorePolicyPage;

export const Head = () => <CommonHead pageName={pageName} />;