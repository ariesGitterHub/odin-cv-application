import { Routes, Route } from "react-router-dom";
// import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Education from "../pages/Education";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
    </Routes>
  );
}
      {
        /* <Route path="/personal-details" element={<PersonalDetails />} />
      <Route path="/education" element={<Education />} />
      <Route path="/work-experience" element={<WorkExperience />} />
      <Route path="/skill-sets" element={<SkillSets />} />
      <Route path="/other-stuff" element={<OtherStuff />} />
      <Route path="*" element={<NotFound />} /> */
      }