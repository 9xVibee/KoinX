import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CryptocurrencyContext from "./context/cryptoCurrencyContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <CryptocurrencyContext>
    <App />
  </CryptocurrencyContext>
  // </React.StrictMode>
);
