import { Routes, Route } from "react-router-dom";
import Perinfoform from "../components/Per_info_form";
import Carddetailform from "../components/card_detail_form";
import Confirmpayment from "../components/confirmPayment";
import { useState } from "react";
const Completepurchase = () => {
  const [personInfoTab, setPersonInfoTab] = useState(true);
  const [cardInfoTab, setCardInfoTab] = useState(false);
  const [confirmPaymentTab, setConfirmPaymentTab] = useState(false);
  return (
    <div className="container">
      <section>
        <nav>
          <h1>Complete your purchase</h1>
          <ul>
            <li>
              Personal Info{" "}
              <div className={personInfoTab ? "news_let" : undefined}></div>
            </li>
            <li>
              Billing Info
              <div className={cardInfoTab ? "news_let" : undefined}></div>
            </li>
            <li>
              Confirm Payment
              <div className={confirmPaymentTab ? "news_let" : undefined}></div>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path={""}
            element={
              <Perinfoform
                perInfoControl={setPersonInfoTab}
                cardInfoControl={setCardInfoTab}
                confirmPaymentControl={setConfirmPaymentTab}
              />
            }
          ></Route>
          <Route
            path={"card_info"}
            element={
              <Carddetailform
                perInfoControl={setPersonInfoTab}
                cardInfoControl={setCardInfoTab}
                confirmPaymentControl={setConfirmPaymentTab}
              />
            }
          ></Route>
          <Route
            path={"confirm_payment"}
            element={
              <Confirmpayment
                perInfoControl={setPersonInfoTab}
                cardInfoControl={setCardInfoTab}
                confirmPaymentControl={setConfirmPaymentTab}
              />
            }
          ></Route>
        </Routes>
      </section>
    </div>
  );
};

export default Completepurchase;
