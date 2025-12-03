import * as React from "react";
import CommonHead from '../components/commonhead';
import BGBase from "../components/bgbase";
import BGTitle from "../components/bgtitle";
import BGSubtitle from "../components/bgsubtitle";
import heartdoughbowlcandle from "../images/heart_dough_bowl_candle.jpg";
import glassheartcandle from "../images/glass_heart_candle.jpg";
import freshies from "../images/freshies.jpg";
import doughbowl3wickcandleA from "../images/dough_bowl_3_wick_candle_A.jpg";
import doughbowl6wickcandleB from "../images/dough_bowl_6_wick_candle_B.jpg";
import tin2wickcandleA from "../images/tin_2_wick_candle_A.jpg";
import waxmelts from "../images/wax_melts.jpg";
import { Offcanvas } from "react-bootstrap";

const pageName = "Catalog";

const itemData = [
  {
    id: 'heart-dough-bowl-candle',
    name: 'Heart Dough Bowl Candle',
    price: '$29.00',
    desc: ['Beautifully hand crafted wood dough bowl with 100% soy wax.'],
    image: heartdoughbowlcandle
  },
  {
    id: 'glass-heart-candle',
    name: 'Glass Heart Candle',
    price: '$25.00',
    desc: ['Glass heart 100% soy candle with 3 wicks. Each heart holds 16 oz of high quality soy wax. Select your "Clean Scents" fragrance oil from the list to make this an amazing gift for a loved one or just for yourself. Burn time is approximately 40 hrs.'],
    image: glassheartcandle
  },
  {
    id: 'room-freshies',
    name: 'Room Freshies',
    price: '$9.00',
    desc: [`100% soy wax melts with 12% fragrance oil load. These room freshies are beautifully decorated and are perfect for smaller spaces like a closet, half bath or drawer. They will last for 1-2 months and can then be broken up placed in a candle wax warmer to extend it's use.`],
    note: ['Note: Please do not use them in a car as they will melt if the internal temperature gets too high.'],
    image: freshies
  },
  {
    id: 'dough-bowl-candle',
    name: 'Dough Bowl Candle',
    price: '$39.00',
    desc: ['Enjoy this beautifully handmade wooden dough bowl candle with 100% natural soy wax. Each bowl measures approx. 10 x 6 x 3. Please note; some may vary slightly in size due to their uniqueness. 16 oz of natural soy wax with 40+ hrs of burning.'],
    image: doughbowl3wickcandleA
  },
  {
    id: 'baguette-bowl-candle',
    name: 'Baguette Bowl Candle',
    price: '$55.00',
    desc: ['Enjoy this beautifully handmade wooden baguette bowl candle with 100% natural soy wax. Each bowl measures approx. 20 x 6 x 3". Please note; some may vary slightly in size due to their uniqueness. 24 oz natural soy wax with 40+ hrs of burning.'],
    image: doughbowl6wickcandleB,
    imgStyle: { objectPosition: '100% 100%', height: '12rem' }
  },
  {
    id: 'candle-tin',
    name: 'Candle Tin',
    price: '$12.00',
    desc: ['Elegant candle tins that will add a touch of sparkle to your living space! Each tin holds 7-8 oz of high quality 100% soy wax. Select your fragrance for a wonderful aroma. Burn time is around 20-30 hrs+.'],
    note: ['Note: We have switched over to our gold tins for the remainder of the year as our silver tin supplier is no longer in business.'],
    image: tin2wickcandleA
  },
  {
    id: 'wax-melts',
    name: 'Wax Melts',
    price: '$6.00',
    desc: ['100% soy wax melts with 12% fragrance oil load. These wax melts will fill your room with any fragrance you choose from our list. All fragrances use "Clean Scents" which are free from harmful chemicals and are phthalate free. Simply break off a square and place it in your favorite wax melt warmer!'],
    image: waxmelts
  },
]

function get_item_data_by_id(id) {
  return itemData.find(item => item.id === id);
}

let offcanvas_title_innerHTML = 'ERROR';
let offcanvas_body_innerHTML = 'ERROR';

function set_offcanvas_content(id) {
  const item = get_item_data_by_id(id);
  const desc = item.hasOwnProperty('desc') ? item.desc : [];
  const note = item.hasOwnProperty('note') ? item.note : [];
  offcanvas_title_innerHTML = item.name;
  offcanvas_body_innerHTML = `<img class="img-fluid mb-3" src=${item.image} />`
  offcanvas_body_innerHTML += desc.map(line => `<p>${line}</p>`).join('\n');
  offcanvas_body_innerHTML += note.map(line => `<p><small>${line}</small></p>`);
}

function CatalogItem({ item, handleShow }) {
  const imgStyle = item.hasOwnProperty('imgStyle') ? item.imgStyle : { height: '12rem' };

  function generate_offcanvas() {
    set_offcanvas_content(item.id);
    handleShow();
  }

  return (
    <div id={item.id} className="card mb-3 mx-2 size-increase-hoverable item-selectable bg-body-tertiary shadow" style={{ width: '18rem' }} onClick={generate_offcanvas}>
      <img src={item.image} alt={item.name} className="card-img-top object-fit-cover" style={imgStyle} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text text-primary">{item.price}</p>
      </div>
    </div>
  );
}



function BGStoreOffcanvas({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title dangerouslySetInnerHTML={{ __html: offcanvas_title_innerHTML}} className="space-grotesk-font"></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body dangerouslySetInnerHTML={{__html: offcanvas_body_innerHTML}} className="space-grotesk-font"></Offcanvas.Body>
    </Offcanvas>
  );
}

function CatalogPage() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <BGBase pageName={pageName}>
      <BGStoreOffcanvas show={show} handleClose={handleClose} />
      <BGTitle>ALL PRODUCTS</BGTitle>
      <BGSubtitle>Made of natural and organic ingredients</BGSubtitle>
      <div className="col-12 d-flex flex-wrap justify-content-center">
        {itemData.map(item => <CatalogItem item={item} handleShow={handleShow} />)}
      </div>
      <div className="col-12 d-flex justify-content-center">
        <p className="w-75 text-center"><small>Please Note: This page is not a store front and may not reflect actual inventory or prices. Please contact <a href="mailto:bonnieglenlcg@gmail.com" className="text-decoration-none">bonnieglenlcg@gmail.com</a> for up-to-date information and purchase inquiries. If you are interested in a candle, please check out our Wax & Fragrances page before ordering to choose a fragrance for your candle. Some fragrances are seasonal and may not be available. Shipping available upon request, shipping cost will vary. All products ordered virtually are made to order, a few days will be required before shipping.</small></p>
      </div>
    </BGBase>
  );
}

export default CatalogPage;

export const Head = () => <CommonHead pageName={pageName} />;