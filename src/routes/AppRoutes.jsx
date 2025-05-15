import { Routes, Route } from "react-router-dom";

import Education from "../pages/Education";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Other from "../pages/Other";
import PersonalDetails from "../pages/PersonalDetails";
import Review from "../pages/Review";
import Skills from "../pages/Skills";
import Work from "../pages/Work";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personal-details" element={<PersonalDetails />} />
      <Route path="/education" element={<Education />} />
      <Route path="/work" element={<Work />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/other" element={<Other />} />
      <Route path="/review" element={<Review />} />
      <Route path="*" element={<NotFound />} /> */
    </Routes>
  );
}
