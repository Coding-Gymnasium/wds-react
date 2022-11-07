import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/pricing":
      Component = Pricing;
      break;
    case "/about":
      Component = About;
      break;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Component />
      </div>
    </>
  );
}

export default App;
