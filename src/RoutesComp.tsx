import{lazy, Suspense} from "react"
import { Route, Routes, useLocation } from 'react-router-dom'
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Project = lazy(() => import('./pages/Project'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
import { AnimatePresence } from 'framer-motion';
import InitialLoader from "./components/InitialLoader";
function RoutesComp() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Suspense fallback={<InitialLoader/>}><Home /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<InitialLoader/>}><About /></Suspense>} />
          <Route path="/projects" element={<Suspense fallback={<InitialLoader/>}><Project /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<InitialLoader/>}><Contact /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<InitialLoader/>}><NotFound /></Suspense>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default RoutesComp
