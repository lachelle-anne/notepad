import { HomePage } from "./pages";
import { Header } from "./components";
import "./App.css";
import { ToastContainer } from "react-toastify";
import ReactTooltip from "react-tooltip";
import "./styling/styles.css";

function App() {
  return (
    <div style={{ backgroundColor: "lightpink", height: "100vh" }}>
      <Header />
      <HomePage />
      <ToastContainer />
      <ReactTooltip place="bottom" type="dark" effect="float" />
    </div>
  );
}

export default App;
