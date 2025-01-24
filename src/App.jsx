import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Committee from "./pages/committee";
import ContactUs from "./pages/contactus";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Helmet>
        <title>Symposium 2025 | Technology Advancements for Sustainability</title>
        <meta
          name="description"
          content="Join Symposium 2025 to explore groundbreaking sustainability innovations through workshops, lectures, and hackathons. Register today!"
        />
        <meta name="keywords" content="Symposium, Sustainability, Hackathon, Technology Advancements, VESIT, " />
        <meta property="og:title" content="Symposium 2025" />
        <meta property="og:description" content="Explore sustainability innovations at Symposium 2025. Register now!" />
        <meta property="og:image" content="/tas.png" />
        <meta property="og:url" content="https://symposiumvesit.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Router>
        <Header />
        <div className="min-h-screen">
          <Routes>
            <Route path="/events" element={<Events />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
