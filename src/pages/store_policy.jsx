import * as React from "react";
import CommonHead from '../components/commonhead';
import BGBase from "../components/bgbase";

const pageName = "Store Policy";

const StorePolicyPage = () => (
  <BGBase pageName={pageName} center>
    <div className="row col-12 col-md-10 col-lg-8">
      <p class="fs-3">PRIVACY POLICY</p>
      <p>Bonnie Glen Luxury Candles & Gifts LLC takes the privacy of our customer’s personal and financial information very seriously.  All information obtained by Bonnie Glen Luxury Candles during your transaction is held in the strictest of confidence.</p>
      <div class="fs-5">What information do we collect?</div>
      <p>We collect information from you when you register on our site, place an order, or fill out a form.  When ordering or registering on our site, you may be asked to enter your name, e-mail address, mailing address or phone number. You may, however, visit our site anonymously.</p>
      <div class="fs-5">What do we use your information for?</div>
      <p>Any of the information we collect from you may be used in one of the following ways:</p>
      <ol>
        <li>To personalize your experience</li>
        <li>To improve customer service
          Your information helps us to more effectively respond to your customer service requests and support needs.</li>
        <li>To process transactions
          Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</li>
        <li>To send periodic emails
          The email address you provide for order processing may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.</li>
      </ol>
      <p class="fs-5">How do we protect your information?</p>
      <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.   We use SSL Secure Shopping for your comfort.  After a transaction, your private information (credit cards, address, financials, etc.) will not be stored on our servers.</p>
      <p class="fs-5">Do we disclose any information to outside parties?</p>
      <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
      <p class="fs-5">Your Consent:</p>
      <p>By using our site, you consent to our online privacy policy.</p>
      <p class="fs-5">Changes to our Privacy Policy:</p>
      <p>Check our agreement periodically for updates and changes.  If we decide to change our privacy policy, we will post those changes on this page.</p>
      <p>Thank you for your cooperation with the above policies.  We appreciate your business!!</p>

      <p class="fs-3">WHOLESALE INQUIRIES</p>
      <p>Please contact us at <a href="mailto:bonnieglenlcg@gmail.com?subject=Wholesale%20Inquiry" class="text-decoration-none">bonnieglenlcg@gmail.com</a> for more information about wholesale pricing.</p>

      <p class="fs-3">PAYMENT METHODS</p>
      <ul>
        <li><i class="bi bi-credit-card"></i> Credit / Debit Cards (Mastercard, Visa, American Express)</li>
        <li><i class="bi bi-paypal"></i> PAYPAL</li>
        <li>Venmo</li>
      </ul>
    </div>
  </BGBase>
);

export default StorePolicyPage;

export const Head = () => <CommonHead pageName={pageName} />;