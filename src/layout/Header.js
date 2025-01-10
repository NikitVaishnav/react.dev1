// import { Outlet, Link } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import "./Home.css";
import logo from "../assests/Home/logo_dark.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import Home from "../pages/Home";
import { Container, Row, Col, Navbar } from "reactstrap";
export default function NavBar() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
      <nav className="navbar navbar-expand-sm fixed-top ">
        <div className="container-fluid">
          
          <img src={logo} className="App-logo" alt="logo" />
            <ul className="navbar-nav ">
              <li className="nav-item p-2 " style={{color:"white",fontWeight:"5px",fontSize:"20px"}}>React</li>
              <li className="" style={{paddingTop:"10px",color:"#353a47"}}><a href="/">v19</a></li>
            </ul>
          
          <img src="taskproject/src/assests/Home/logo192.png" alt="" />
          <form className="d-flex mx-auto">
                  
                  <div className="input-group " style={{marginLeft:"210px",}}> 
              <span
                className="input-group-text"
                style={{
                  backgroundColor: "#333a45",
                  border: "none",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              >
                <i className="bi bi-search" style={{ color: "white" }}></i>{" "}
                {/* Bootstrap Search Icon */}
              </span>
              <input
                className="form-control search-input"
                style={{
                  backgroundColor: "#333a45",
                  color: "white",
                  width: "850px",
                  marginTop: "0",
                  marginBottom: "0",
                  paddingTop: "0",
                  paddingBottom: "0",
                }}
                type="text"
                placeholder="Search"
              />
            </div>
          </form>
          <ul className="navbar-nav ">
            <li className="nav-item  p-2 ">
              <Link to="/Learn">Learn</Link>
            </li>
            <li className="nav-item  p-2">
              <Link to="/Refrence">Refrence</Link>
            </li>
            <li className="nav-item  p-2">
              <Link to="/Community">Community</Link>
            </li>
            <li className="nav-item  p-2">
              <Link to="/Blog">Blog</Link>
            </li>
            <li className="nav-item p-2 ">
            <span className="bi bi-asterisk h4 p-2" style={{color:"white"}}></span>
            </li>
            <li className="nav-item p-2 ">
            <span className="bi bi-translate h4 p-2" style={{color:"white"}}></span>
            </li>
            <li className="nav-item p-2 ">
            <span className="bi bi-chat-heart-fill p-2 h4" style={{color:"white"}}></span>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>
    </>
  );
}
