import { Link } from "react-router-dom";
import { states } from "../Data/allData";
const Per_info_form = ({
  perInfoControl,
  cardInfoControl,
  confirmPaymentControl,
}) => {
  const setTab = () => {
    perInfoControl(false);
    cardInfoControl(true);
    confirmPaymentControl(false);
  };
  return (
    <form action="" method="post" className="form">
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" placeholder="Enter your name" />
      </div>
      <div>
        <label htmlFor="email">
          Email Addresss <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <p>The purchase reciept will be sent to this address</p>
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="address1">Address 1</label>
        <br />
        <input type="text" name="address1" placeholder="Enter Address" />
      </div>
      <div>
        <label htmlFor="address2">Address 2</label>
        <br />
        <input type="text" name="address2" placeholder="Enter Address" />
      </div>
      <div className="one-line-input">
        <div className="input1">
          <label htmlFor="lga">Local Goverment</label>
          <br />
          <input type="text" name="lga" placeholder="Enter LG" />
        </div>
        <div className="input2">
          <label htmlFor="state">State</label>
          <br />
          <select name="state" id="state">
            {states.map((state, index) => {
              return (
                <option key={index} value={index + 1}>
                  {state}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="buttons">
        <Link to="/card_info" className="submit-btn" onClick={() => setTab()}>
          Next
        </Link>
        <Link to="/" className="cancel-btn">
          Cancel Payment
        </Link>
      </div>
    </form>
  );
};

export default Per_info_form;
