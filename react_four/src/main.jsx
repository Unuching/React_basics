import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./header";
import MainContent from "./mainContent";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <MainContent />
  </>
);
