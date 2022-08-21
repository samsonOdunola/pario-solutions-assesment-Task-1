import { Link } from "react-router-dom";

const Carddetailform = ({
  perInfoControl,
  cardInfoControl,
  confirmPaymentControl,
}) => {
  const setTab = () => {
    perInfoControl(false);
    cardInfoControl(false);
    confirmPaymentControl(true);
  };
  const resetTab = () => {
    perInfoControl(true);
    cardInfoControl(false);
    confirmPaymentControl(false);
  };
  return (
    <form action="" method="post" className="form">
      <div>
        <label htmlFor="nameoncard">
          Name on Card<span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input type="text" name="name" placeholder="Name on card" />
      </div>
      <div>
        <label htmlFor="cardtype">
          Card Type <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <select type="text" name="cardtype" placeholder="Email">
          <option value="0">Visa</option>
          <option value="1">Verve</option>
          <option value="2">Master Card</option>
        </select>
      </div>

      <div className="one-line-input">
        <div className="input3">
          <label htmlFor="carddetails">
            Card Details<span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input
            type="text"
            name="carddetails"
            placeholder="0000 0000 0000 0000"
            maxLength="19"
          />
        </div>
        <div className="input4">
          <label htmlFor="expirydate">
            Expiry Date<span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input type="text" name="expirydate" placeholder="mm/yy" />
        </div>
        <div className="input5">
          <label htmlFor="cvv">
            CVV<span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input type="text" name="cvv" placeholder="" />
        </div>
      </div>
      <div className="buttons">
        <Link
          to="/confirm_payment"
          onClick={() => setTab()}
          className="submit-btn"
        >
          Next
        </Link>{" "}
        <Link to="/" className="cancel-btn" onClick={() => resetTab()}>
          Cancel Payment
        </Link>
      </div>
    </form>
  );
};

export default Carddetailform;
