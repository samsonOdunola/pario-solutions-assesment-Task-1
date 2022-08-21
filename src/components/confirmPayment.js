import { Link } from "react-router-dom";
import { transaction } from "../Data/allData";
const Confirmpayment = ({
  perInfoControl,
  cardInfoControl,
  confirmPaymentControl,
}) => {
  const setTab = () => {
    perInfoControl(false);
    cardInfoControl(true);
    confirmPaymentControl(false);
  };
  const resetTab = () => {
    perInfoControl(true);
    cardInfoControl(false);
    confirmPaymentControl(false);
  };
  return (
    <div className="confirm-box-container">
      <div className="confirm-box">
        <div className="heading">
          <h1>Item Name</h1>
          <h1>price</h1>
        </div>
        <div className="body">
          <div className="entry">
            {transaction.map((sales, index) => {
              const { item, price } = sales;
              return (
                <div className="item-list" key={index}>
                  <p>{item}</p>
                  <p>{price}</p>
                </div>
              );
            })}
          </div>

          <div className="total">
            <div className="item-list">
              <p>Total</p>
              <p>50,000.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/purchase_complete" className="submit-btn">
          pay
        </Link>
        <Link to="/" className="cancel-btn" onClick={() => resetTab()}>
          Cancel Payment
        </Link>
      </div>
    </div>
  );
};

export default Confirmpayment;
