import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Committee from "./pages/committee";

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/committee" element={<Committee />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
