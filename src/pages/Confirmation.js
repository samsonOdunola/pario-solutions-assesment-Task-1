import { Link } from "react-router-dom";
import { BsCheck } from "react-icons/bs";
const Confirmation = () => {
  return (
    <div className="succesfull-box">
      <BsCheck className="check-icon" />
      <h3>Purchase Completed</h3>
      <p>Please check your email for details concerning this transaction.</p>
      <Link to="/" className="return-link">
        Return Home
      </Link>
    </div>
  );
};

export default Confirmation;
