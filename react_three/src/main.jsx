import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <main>
      <img src="/src/react.jpeg" alt="react-logo" className="reactLogo" />
      <h1>Fun Facts about react</h1>
      <ul className="myLists">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walks</li>
        <li>Has well over 200k stars on github</li>
        <li>Is maintained by meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main> */}
    <MyPageTwo />
  </StrictMode>
);
function MyPage() {
  return <div>reactName</div>;
}
function MyPageTwo() {
  return (
    <Fragment>
      <img src="/src/react.jpeg" alt="react-logo" width={"100px"} />
      <header></header>
      <footer>
        <p>All rights Reserved</p>
      </footer>
    </Fragment>
  );
}
