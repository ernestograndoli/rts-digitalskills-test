import "./styles/common/styles.css";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home/index";
import Services from "./pages/services/index";
import Solutions from "./pages/solutions/index";
import Industries from "./pages/industries/index";
import Company from "./pages/company/index";
import Insights from "./pages/insights/index";
import Contact from "./pages/contact/index";
import ErrorPage from "./pages/errorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/company" element={<Company />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App;
