import * as SC from "./CommentsListCustom"

import avaColton from "../../assets/pics/image-colton.jpg"
import avaIrene from "../../assets/pics/image-irene.jpg"
import avaAnne from "../../assets/pics/image-anne.jpg"

const CommentsList = () => {
    return (
      <SC.CommentsListCustom>
        <li>
          <div>
            <img src={avaColton} alt="avatar Colton" />
            <div>
              <h5>Colton Smith</h5>
              <h6>Verified Buyer</h6>
            </div>
          </div>
          <p>
            “ We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent! ”
          </p>
        </li>
        <li>
          <div>
            <img src={avaIrene} alt="avatar Irene" />
            <div>
              <h5>Irene Roberts</h5>
              <h6>Verified Buyer</h6>
            </div>
          </div>
          <p>
            “Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery.”
          </p>
        </li>
        <li>
          <div>
            <img src={avaAnne} alt="avatar Anne" />
            <div>
              <h5>Anne Wallace</h5>
              <h6>Verified Buyer</h6>
            </div>
          </div>
          <p>
            “ Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone! ”
          </p>
        </li>
      </SC.CommentsListCustom>
    );
}
 
export default CommentsList;