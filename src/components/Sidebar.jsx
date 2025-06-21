import { useState } from "react";
import { Navbar, Offcanvas, Button, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { commonRoutes, logo } from "../assets/assets";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      {/* Top Navbar with Hamburger Icon */}
      <Navbar  expand={false} className="d-md-none p-3 ">
         <img src={logo} alt="" style={{ height: "40px", width: "133.41px" }} />
        <Button variant="outline-light" onClick={toggleSidebar}>
          ☰
        </Button>
      </Navbar>

      {/* Offcanvas for small screens */}
      <Offcanvas show={showSidebar} onHide={toggleSidebar} className="bg-dark text-white">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <img src={logo} alt="logo" style={{ height: "40px", width: "133.41px" }} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {commonRoutes.map(({ key, path }) => (
            <NavLink
              key={key}
              to={path}
              onClick={() => setShowSidebar(false)}
              className={({ isActive }) =>
                `text-decoration-none d-block py-2 fs-5 ${
                  isActive ? "text-white" : "text-gray"
                }`
              }
            >
              {key}
            </NavLink>
          ))}

     
        </Offcanvas.Body>
      </Offcanvas>

      {/* Fixed Sidebar for md+ screens */}
      <div
        className="d-none  d-md-flex flex-column gap-4  p-4 text-white "
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <img src={logo} alt="" style={{ height: "40px", width: "133.41px" }} />

        {commonRoutes.map(({ key, path }) => (
          <NavLink
            key={key}
            to={path}
            className={({ isActive }) =>
              `text-decoration-none fs-5 ${
                isActive ? "text-white" : "text-gray"
              }`
            }
          >
            <p className="m-0">{key}</p>
          </NavLink>
        ))}

    
      </div>
    </>
  );
}

export default Sidebar;
