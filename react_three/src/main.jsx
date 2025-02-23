import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./header.jsx";
import MainContent from "./mainContent.jsx";
import Footer from "./footer.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </StrictMode>
);
