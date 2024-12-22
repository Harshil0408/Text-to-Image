import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AcontextProvider from "./context/Acontext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AcontextProvider>
      <App />
    </AcontextProvider>
  </BrowserRouter>
);
