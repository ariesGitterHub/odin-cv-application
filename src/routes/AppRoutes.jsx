import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

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