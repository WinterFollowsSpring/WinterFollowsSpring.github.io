import * as React from "react";
import CommonHead from '../components/commonhead';
import BGBase from "../components/bgbase";
import BGTitle from "../components/bgtitle";
import BGSubtitle from "../components/bgsubtitle";

const pageName = "Candle Care";

const CandleCarePage = () => (
  <BGBase pageName={pageName} center>
    <div className="col-12 col-md-10 space-grotesk-font">
      <BGTitle>CANDLE CARE</BGTitle>
      <BGSubtitle>First Burn is the Most Important for Soy Wax!</BGSubtitle>

      <p>First Burn — Allow pool of wax to extend to the outside rim of the tin or jar to set its "memory."  Each time you burn the candle, it will "remember" to burn out to the rim.  This will avoid “tunneling” which leaves wax on the walls of the container and you won’t get the most out of your candle. </p>
      <ul>
        <li>TRIM YOUR WICK!  Always trim your wick to 1/4" prior to EACH use, or when the wick “mushrooms.” Trimming the wick will allow the candle to have a longer burn time.</li>
        <li>Never leave a burning candle unattended! It goes without saying that is a fire hazard and we want you to enjoy your candle safely.</li>
        <li>Never burn a candle near anything flammable, well away from drafts, other heat sources, and keep burning candles out of the reach of children and pets.</li>
        <li>In general, it is recommended that you don’t burn candles for longer than four hours and let it cool for at least two hours before relighting.</li>
        <li>Our natural soy wax has a lower melting point of 115-119 degrees Fahrenheit. Store candles in an upright, level position. Please take care not to leave your candle in warm environments, vehicles or expose it to direct heat as the wax will get soft and may liquify. If spilled, soy wax is easily cleaned with soap and water.</li>
        <li>Extinguish flame by placing lid on candle, using a candle snuffer, or by dipping the wick into the melted wax pool, then reposition. This will help eliminate smoking or "afterglow" and ensures proper candle care.</li>
        <li>Now that you’ve followed proper candle care you can enjoy your hand-poured Bonnie Glen Soy Candle!</li>
      </ul>
    </div>
  </BGBase>
);

export default CandleCarePage;

export const Head = () => <CommonHead pageName={pageName} />;