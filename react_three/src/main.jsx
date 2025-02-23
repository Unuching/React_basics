import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </StrictMode>
);

function Header() {
  return (
    <>
      <nav>
        <img
          src="/src/react.jpeg"
          alt="react_logo"
          width={"70px"}
          className="react_logo"
        />
        <ul className="nav_bar">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
}

function MainContent() {
  return (
    <>
      <h1>Reasons I want to learn React</h1>
      <ul className="myLists ">
        <li>Less learning curve</li>
        <li>Very popular among community</li>
        <li>Have a great job opportunity</li>
      </ul>
    </>
  );
}
function Footer() {
  return <>2025 Unuching Marma. All rights reserved.</>;
}
