import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import reactLogo from "./assets/react.svg";
import './index.css'
import App from './App.jsx'

function MyWorld() {
  return (
    <>
      <h1>Unuching Marma</h1>
      <ol>
        <li>Mrachingnu Marma</li>
        <li>Chengchengnu Marma</li>
      </ol>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <h1>Hello React</h1>
      <MyWorld />

      <img src="/src/react.jpeg" alt="" className="reactLogo"/>
    </div>
  </StrictMode>
);
