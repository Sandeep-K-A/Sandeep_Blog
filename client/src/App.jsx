import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./components/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
      <Routes>
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
      <Routes>
        <Route
          path="/sign-up"
          element={<Signup />}
        />
      </Routes>
      <Routes>
        <Route
          path="/sign-in"
          element={<Signin />}
        />
      </Routes>
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
      <Routes>
        <Route
          path="/projects"
          element={<Projects />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
