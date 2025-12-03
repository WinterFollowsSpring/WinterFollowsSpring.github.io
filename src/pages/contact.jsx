import * as React from "react";
import CommonHead from '../components/commonhead';
import BGBase from "../components/bgbase";
import BGTitle from "../components/bgtitle";

const pageName = "Contact";

const ContactPage = () => (
  <BGBase pageName={pageName}>
    <BGTitle>LET'S TALK</BGTitle>
    <div className="col-12 d-flex justify-content-center align-items-center">
      <div className="col-6 text-center">
        <p>If you have questions or special inquiries, you're welcome to contact me directly at my email listed below.</p>
        <p className="fs-4 mb-0">Bonnie Glen</p>
        <p className="fs-5"><small>Luxury Candles & Gifts LLC</small></p>
        <p><a href="mailto:bonnieglenlcg@gmail.com" className="text-decoration-none">bonnieglenlcg@gmail.com</a></p>
      </div>
    </div>
  </BGBase>
);

export default ContactPage;

export const Head = () => <CommonHead pageName={pageName} />;
