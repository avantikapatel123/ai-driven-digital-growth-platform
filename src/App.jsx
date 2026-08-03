import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BusinessAnalysis from "./pages/BusinessAnalysis";
import CompetitorAnalysis from "./pages/CompetitorAnalysis";
import Pricing from "./pages/Pricing";
import Referral from "./pages/Referral";
import Contact from "./pages/Contact";
import Recommendations from "./pages/Recommendations";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-analysis" element={<BusinessAnalysis />} />
        <Route
          path="/competitor-analysis"
          element={<CompetitorAnalysis />}
        />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;