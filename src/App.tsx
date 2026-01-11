import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ComingSoonPage } from "@/components/ComingSoonPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoonPage />} />
      </Routes>
    </Router>
  );
}