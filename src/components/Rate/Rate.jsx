import * as SC from "./RateCustom"

import { ReactComponent as StartIcon } from "../../assets/pics/icon-star.svg"

const Rate = () => {
    return (
      <SC.RateList>
        <li>
          <div>
            <StartIcon />
            <StartIcon />
            <StartIcon />
            <StartIcon />
            <StartIcon />
          </div>
          <h4> Rated 5 Stars in Reviews</h4>
        </li>
        <li>
          <div>
            <StartIcon />
            <StartIcon />
            <StartIcon />
            <StartIcon />
            <StartIcon />
          </div>
          <h4>Rated 5 Stars in Report Guru</h4>
        </li>
        <li>
          <div>
            <StartIcon />
            <StartIcon />
            <StartIcon />
            <StartIcon />
            <StartIcon />
          </div>
          <h4> Rated 5 Stars in BestTech</h4>
        </li>
      </SC.RateList>
    );
}
 
export default Rate;