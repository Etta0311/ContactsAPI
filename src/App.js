import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header/Header";
import Effect from "./components/Animation/Effect";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Router basename="/">
        <Header />
        <Effect />
        <Contacts />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
