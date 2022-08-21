import Completepurchase from "./pages/complete_purchase";
import { Routes, Route } from "react-router-dom";
import Confirmation from "./pages/Confirmation";
function App() {
  return (
    <div className="App">
      <div className="skewed-background"></div>
      <Routes>
        <Route path="/*" element={<Completepurchase />}></Route>
        <Route path="/purchase_complete" element={<Confirmation />}></Route>
      </Routes>
    </div>
  );
}

export default App;
