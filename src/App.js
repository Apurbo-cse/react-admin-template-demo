import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import ProfileComponent from "./pages/ProfileComponent";
import MyClaimComponent from "./pages/MyClaimComponent";
import AnnualReportComponent from "./pages/AnnualReportComponent";
import LodgeClaimComponent from "./pages/LodgeClaimComponent";
import InvestmentComponent from "./pages/InvestmentComponent";
import HalfYearlyReportComponent from "./pages/HalfYearlyReportComponent";
import FaqComponent from "./pages/FaqComponent";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/parvej" element={<ProfileComponent />} />
          <Route path="/my-claims" element={<MyClaimComponent />} />
          <Route path="/lodge-claim" element={<LodgeClaimComponent />} />
          <Route path="/reports/annual-report" element={<AnnualReportComponent />} />
          <Route path="/investment" element={<InvestmentComponent />} />
          <Route path="/reports/half-yearly-report" element={<HalfYearlyReportComponent />} />
          <Route path="/faq" element={<FaqComponent />} />

          <Route path="*" element={<> not found </>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
