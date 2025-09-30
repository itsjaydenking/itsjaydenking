import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SiteLayout from "./components/SiteLayout.jsx";
import Landing from "./routes/Landing.jsx";
import Engineer from "./routes/engineer/Engineer.jsx";
import EngineerProjects from "./routes/engineer/Projects.jsx";
import EngineerProjectSpots from "./routes/engineer/projects/Spots.jsx";
import EngineerSkills from "./routes/engineer/Skills.jsx";
import EngineerTestimonials from "./routes/engineer/Testimonials.jsx";
import EngineerContact from "./routes/engineer/Contact.jsx";
import Storyteller from "./routes/storyteller/Storyteller.jsx";
import StorytellerProductions from "./routes/storyteller/Productions.jsx";
import StorytellerSystems from "./routes/storyteller/Systems.jsx";
import StorytellerSystemLV from "./routes/storyteller/systems/LasVegasByNight.jsx";
import StorytellerTestimonials from "./routes/storyteller/Testimonials.jsx";
import StorytellerBooking from "./routes/storyteller/Booking.jsx";
import Fusion from "./routes/fusion/Fusion.jsx";
import FusionEbonmane from "./routes/fusion/EbonmaneInk.jsx";
import FusionLabs from "./routes/fusion/Labs.jsx";
import FusionCollaborations from "./routes/fusion/Collaborations.jsx";
import FusionContact from "./routes/fusion/Contact.jsx";
import MapOverlay from "./routes/global/Map.jsx";
import Journal from "./routes/global/Journal.jsx";
import Inventory from "./routes/global/Inventory.jsx";
import Codex from "./routes/global/Codex.jsx";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />

        <Route path="/engineer" element={<Engineer />} />
        <Route path="/engineer/projects" element={<EngineerProjects />} />
        <Route
          path="/engineer/projects/spots"
          element={<EngineerProjectSpots />}
        />
        <Route path="/engineer/skills" element={<EngineerSkills />} />
        <Route
          path="/engineer/testimonials"
          element={<EngineerTestimonials />}
        />
        <Route path="/engineer/contact" element={<EngineerContact />} />

        <Route path="/storyteller" element={<Storyteller />} />
        <Route
          path="/storyteller/productions"
          element={<StorytellerProductions />}
        />
        <Route path="/storyteller/systems" element={<StorytellerSystems />} />
        <Route
          path="/storyteller/systems/las-vegas-by-night"
          element={<StorytellerSystemLV />}
        />
        <Route
          path="/storyteller/testimonials"
          element={<StorytellerTestimonials />}
        />
        <Route path="/storyteller/booking" element={<StorytellerBooking />} />

        <Route path="/fusion" element={<Fusion />} />
        <Route path="/fusion/ebonmane-ink" element={<FusionEbonmane />} />
        <Route path="/fusion/labs" element={<FusionLabs />} />
        <Route
          path="/fusion/collaborations"
          element={<FusionCollaborations />}
        />
        <Route path="/fusion/contact" element={<FusionContact />} />

        <Route path="/map" element={<MapOverlay />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/codex" element={<Codex />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <AnimatedRoutes />
        </motion.div>
      </SiteLayout>
    </BrowserRouter>
  );
}
