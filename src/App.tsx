import './App.css';
import { ThemeProvider } from './components/theme-provider';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Experience from './pages/Experience'; // ✅ Import Experience
import StudentQueue from './pages/projects/StudentQueue';
import Notemon from './pages/projects/Notemon';
import Trackalack from './pages/projects/Trackalack';
import Test from './Test';
import Taskmon from './pages/projects/Taskmon';
import TeamPay from './pages/projects/TeamPay';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} /> {/* ✅ Added */}

            {/* Individual Project Pages */}
            <Route path="/projects/student-queue" element={<StudentQueue />} />
            <Route path="/projects/notemon" element={<Notemon />} />
            <Route path="/projects/trackalack" element={<Trackalack />} />
            <Route path="/projects/taskmon" element={<Taskmon />} />
            <Route path="/projects/team-pay" element={<TeamPay />} />

            {/* Misc */}
            <Route path="/test" element={<Test />} />

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
