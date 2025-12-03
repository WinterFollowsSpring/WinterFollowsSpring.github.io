import * as React from "react";
import CommonHead from '../components/commonhead';
import BGBase from "../components/bgbase";
import BGTitle from "../components/bgtitle";
import aboutmephoto from "../images/about_me_page_photo.jpg"

const pageName = "About";

const AboutPage = () => (
    <BGBase pageName={pageName}>
        <BGTitle>HOW WE GOT HERE</BGTitle>
        <div className="row d-flex justify-content-center">
            <img src={aboutmephoto} alt="" className="col-6 col-xxl-4 img-fluid object-fit-cover d-none d-md-block" />
            <div className="col-12 col-md-6 col-xxl-4">
                <p className="fs-3">BIO</p>
                <p class="fst-italic">Bonnie Glen Luxury Candles & Gifts LLC is an idea that came about during 2020. It was inspired by nature and the beautiful scenery of Hiawassee, North Georgia.</p>
                <p class="fst-italic">It’s founder, Yvonne Miller, was born and raised near Oban, Scotland and emigrated to the U.S with her family in 1998.  Atlanta was her home for most of that time but she and her family often visited Hiawassee and surrounding areas many times over the years.</p>
                <p class="fst-italic">The area reminded her of Scotland with it’s rolling hills and lochs although the weather in Scotland was definitely colder than in Georgia. It was here that Yvonne and her family settled and have owned a home since 2012.</p>
                <p class="fst-italic">"Creating beautiful candles has been a passion that we are excited to see come to life.  We hope you enjoy our products as much as we do!"</p>
            </div>
        </div>
    </BGBase>
);

export default AboutPage;

export const Head = () => <CommonHead pageName={pageName} />;