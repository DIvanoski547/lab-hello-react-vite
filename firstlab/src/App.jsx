import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import logo from "./assets/iLogo.png";
import menuLogo from "./assets/menu-top-xs.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="bg-dark">
        <nav className="navbar p-50">
          <img src={logo} alt="icon" className="" />
          <img src={menuLogo} alt="icon" className="img-wrapper" />
        </nav>
        <div className="p-50">
          <h1 className="justify-left">
            Say Hello to
            <br />
            ReactJS
          </h1>
          <p className="justify-left">
            You will learn how to use
            <br />
            the most popular frontend library,
            <br />
            and become a super Ninja developer.
          </p>
          <button className="justify-left">AWESOME</button>
        </div>
      </div>
      <div className="logo-flex">
        <div>
          <img src={icon1} alt="icon" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} alt="icon" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their statue</p>
        </div>
        <div>
          <img src={icon3} alt="icon" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div>
          <img src={icon4} alt="icon" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;
