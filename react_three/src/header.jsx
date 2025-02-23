export default function Header() {
  return (
    <>
      <header className="header">
        <img
          src="/src/react.jpeg"
          alt="react_logo"
          width={"70px"}
          className="react_logo"
        />
        <nav>
          <ul className="nav_bar">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
