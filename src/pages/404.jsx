import * as React from "react"
import BGBase from "../components/bgbase";
import BGTitle from "../components/bgtitle";
import CommonHead from "../components/commonhead";

const pageName = "Not Found";

const NotFoundPage = () => {
  return (
    <BGBase pageName={pageName} center>
      <div className="row col-12 col-md-10 col lg-8 text-center d-flex justify-content-center">
        <BGTitle>PAGE NOT FOUND</BGTitle>
        <p>Sorry 😔, we couldn't find what you were looking for.</p>
        <a href="/" role="button" class="btn btn-primary col-12 col-sm-6 col-md-2 mt-3">GO HOME</a>
      </div>
    </BGBase>
  )
}

export default NotFoundPage

export const Head = () => <CommonHead pageName={pageName} />;
