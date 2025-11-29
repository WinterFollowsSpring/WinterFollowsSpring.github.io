import * as React from "react";
import CommonHead from '../components/commonhead';
import BGBase from "../components/bgbase";
import BGTitle from "../components/bgtitle";
import BGSubtitle from "../components/bgsubtitle";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import tagtexture from "../images/tagtexture.png"

const pageName = "Wax & Fragrances";

const fragranceData = [
  {
    Name: 'Honeysuckle & Jasmine',
    Desc: 'This soft, dreamy scent opens with top notes of lemon and ginger before giving way to a heart of jasmine and honeysuckle.',
    Type: 'Everyday'
  },
  {
    Name: 'Lemon Verbena',
    Desc: 'Zesty lemon & floral verbena combine this uplifting fragrance. Bright, lightly sweet notes of citrus & sugar bolster a heart of lemon verbena & lemongrass.',
    Type: 'Everyday'
  },
  {
    Name: 'Loch Lomond',
    Desc: 'Loch Lomond fragrance oil transports you to a hilltop overlooking a Scottish loch. Top notes of citrus, sea salt, and ozone add a marine accord that envelops the floral heart of jasmine, lilac, and orange blossom.',
    Type: 'Everyday'
  },
  {
    Name: 'MacIntosh Apple',
    Desc: 'This clean crisp fragrance oil is simply delicious! There is no mistake that this is apple with it’s juicy fragrance.',
    Type: 'Everyday'
  },
  {
    Name: 'Peppermint & Eucalyptus',
    Desc: 'Our Peppermint and Eucalyptus fragrance oil blends sweet peppermint with tingly, earthy eucalyptus for a refreshing spa-like scent. Hints of cedarwood add depth that make this a perfect year-round fragrance.',
    Type: 'Everyday'
  },
  {
    Name: 'Sea Salt & Orchid',
    Desc: 'Wrap your senses in an elegant blend of soft floral notes and marine highlights with Sea Salt and Orchid fragrance oil. Crisp ozonic top notes blend into mid notes of sea salt, lush green leaves, and intoxicating freesia all resting on a relaxing base of tonka bean, amber, and a hint of musk.',
    Type: 'Everyday'
  },
  {
    Name: 'White Sage & Lavender',
    Desc: 'Sage, rosemary, and chamomile awaken the earthiness of lavender, while hints of sandalwood and cedar in the base are reinforced by clove, lavandin, and cedarwood essential oils.',
    Type: 'Everyday'
  },
  {
    Name: 'Strawberry Fields',
    Desc: 'Strawberry Fields is a juicy, mouthwatering fragrance oil. The fruity fusion of strawberry and guava top notes blend with passionfruit and mango for a sweet, tropical blast.',
    Type: 'Summer'
  },
  {
    Name: 'Apples & Maple Bourbon',
    Desc: 'This mouthwatering, boozy scent starts with top notes of apple, cinnamon, and a hint of orange. Bourbon and butter are the heart of this fragrance, while rich, sweet maple and vanilla finish off this irresistible baked apple dessert.',
    Type: 'Fall'
  },
  {
    Name: 'Banana Nut Bread',
    Desc: 'Our nostalgic Banana Nut Bread fragrance oil captures the mouth-watering bakery aromas of a homemade classic. Top notes of toasted walnut and ripe banana combine with nutmeg and sugar for a blend that’s perfectly nutty and sweet. Vanilla and cake base notes enrich the sweetness in this toasty scent.',
    Type: 'Fall'
  },
  {
    Name: 'Pumpkin Spice Latte',
    Desc: 'Pumpkin Spice Latte is a sophisticated fall fragrance oil with an invigorating flourish of spice. This scent transports you to a crisp autumn day with a dusting of cardamom and apple swirled into mid notes of pumpkin and brown sugar. A spice heavy base with rich notes of vanilla rounds out the scent.',
    Type: 'Fall'
  },
  {
    Name: 'Christmas Hearth',
    Desc: 'A classic holiday scent that tells the story of a cozy holiday night spent sipping wine in front of the fireplace. Christmas Hearth fragrance oil combines orange spice notes from the kitchen, fir and pine notes from the Christmas tree, and an earthy smokiness from the fireplace.',
    Type: 'Holiday'
  },
  {
    Name: 'Cranberry Marmalade',
    Desc: 'Cranberry Apple Marmalade is a luscious blend of tart cranberries, juicy apples, and spice. Top notes of orange peel and apple sweeten the cranberry heart of this fragrance oil, while notes of cinnamon, clove, and sugar wrap all the fruits together into a delectable aromatic treat.',
    Type: 'Holiday'
  },
  {
    Name: 'Fraser Fir',
    Desc: 'Inspired by the popular Christmas tree, our Fraser Fir fragrance oil has mild citrus top notes, earthy undercurrents, and a woody, fir balsam core that makes you think “Christmastime.” Cozy and comforting, Fraser Fir is perfect for setting a festive holiday mood or creating the right ambience for a quiet winter evening by the fire.',
    Type: 'Holiday'
  }
]

function BGFragrance({ fragranceName, fragranceDesc }) {
  const renderTooltip = (props) => (
    <Tooltip {...props}>{fragranceDesc}</Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 50, hide: 50 }}
      overlay={renderTooltip}
    >
      <div className="mb-3 position-relative size-increase-hoverable" style={{ width: '220px', height: 'auto' }}>
        <img src={tagtexture} alt="" className="img-fluid" />
        <p className="position-absolute fs-3 fst-italic top-50 start-50 translate-middle text-center lofty-goals-font">{fragranceName}</p>
      </div>
    </OverlayTrigger>
  );
}

const WaxAndFragrancesPage = () => (

  <BGBase pageName={pageName} light>
    <BGTitle>WAX & FRAGRANCES</BGTitle>
    <BGSubtitle>We use Golden Brands 464 all-natural soy wax in all of our candles. This wax uses soy based additives that help reduce frosting and strengthen the fragrance throw. We also use Golden Brands 494 in all of our wax melts and freshies. This is a harder all-natural soy wax that allows us to use the maximum fragrance load of 12% to give you the best fragrance throw.</BGSubtitle>
    <p className="fs-2 w-100 text-center">EVERYDAY FRAGRANCES</p>

    <div className="w-100 d-flex flex-wrap justify-content-evenly">
      {
        fragranceData.filter(fragrance => fragrance.Type === 'Everyday').map(fragrance => (
          <BGFragrance fragranceName={fragrance.Name} fragranceDesc={fragrance.Desc} />
        ))
      }
    </div>

    <p className="fs-2 w-100 text-center">SUMMER FRAGRANCES</p>

    <div className="w-100 d-flex flex-wrap justify-content-evenly">
      {
        fragranceData.filter(fragrance => fragrance.Type === 'Summer').map(fragrance => (
          <BGFragrance fragranceName={fragrance.Name} fragranceDesc={fragrance.Desc} />
        ))
      }
    </div><p className="fs-2 w-100 text-center">FALL FRAGRANCES</p>

    <div className="w-100 d-flex flex-wrap justify-content-evenly">
      {
        fragranceData.filter(fragrance => fragrance.Type === 'Fall').map(fragrance => (
          <BGFragrance fragranceName={fragrance.Name} fragranceDesc={fragrance.Desc} />
        ))
      }
    </div><p className="fs-2 w-100 text-center">HOLIDAY FRAGRANCES</p>

    <div className="w-100 d-flex flex-wrap justify-content-evenly">
      {
        fragranceData.filter(fragrance => fragrance.Type === 'Holiday').map(fragrance => (
          <BGFragrance fragranceName={fragrance.Name} fragranceDesc={fragrance.Desc} />
        ))
      }
    </div>
  </BGBase>
);

export default WaxAndFragrancesPage;

export const Head = () => <CommonHead pageName={pageName} />;