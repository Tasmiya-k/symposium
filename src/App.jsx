import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Committee from "./pages/committee";
import ContactUs from "./pages/contactus";
import Home from "./pages/Home";
import Registration from "./pages/registration";

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
