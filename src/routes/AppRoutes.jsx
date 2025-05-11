import { Routes, Route } from "react-router-dom";

import Education from "../pages/Education";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import OtherStuff from "../pages/OtherStuff";
import PersonalDetails from "../pages/PersonalDetails";
import ResumeControls from "../pages/ResumeControls";
import SkillSets from "../pages/SkillSets";
import WorkExperience from "../pages/WorkExperience";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personal-details" element={<PersonalDetails />} />
      <Route path="/education" element={<Education />} />
      <Route path="/work-experience" element={<WorkExperience />} />
      <Route path="/skill-sets" element={<SkillSets />} />
      <Route path="/other-stuff" element={<OtherStuff />} />
      <Route path="/resume-controls" element={<ResumeControls />} />
      <Route path="*" element={<NotFound />} /> */
    </Routes>
  );
}
