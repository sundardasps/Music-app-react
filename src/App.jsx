import { Routes, Route, Navigate } from "react-router-dom";
import { commonRoutes } from "./assets/assets"; // Already includes `/foryou/<id>`
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useGradient } from "./context/GradientContext";

function App() {
  const { bgGradient } = useGradient();

  useEffect(() => {
    document.body.style.background = bgGradient;
  }, [bgGradient]);

  
  return (
    <div className="fade-in d-md-flex   w-100 " style={{ height: "100vh"}}>
      <Sidebar />
      <Container fluid>
        <Routes>
          {/* ✅ Redirect root to /foryou/:firstSongId */}
          <Route
            path="/"
            element={<Navigate to={commonRoutes[0].path} replace />}
          />

          {/* Render Home for all common routes */}
          {commonRoutes.map(({ key, path }) => (
            <Route key={key} path={path} element={<Home />} />
          ))}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
