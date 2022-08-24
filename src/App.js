import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header/Header";
import Effect from "./components/Animation/Effect";
import Facts from "./components/Facts/Facts";
import Footer from "./components/Footer/Footer";
// import "./App.css";

function App() {
  return (
    <div>
      <Router basename="/">
        <Header />
        <Effect />
        <Facts />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
