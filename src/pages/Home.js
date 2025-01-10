import logo from "../assests/Home/logo_dark.svg";
import "../styles/Home/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, Row, Col, Navbar } from "reactstrap";

export default function Home() {
  return (
    <>
      <div className="container-fluid first-con">
        <img src={logo} className="App-logo-home mx-auto d-block" alt="logo" />
        <div
          className="display-4 text-style"
          style={{ color: "white", fontWeight: "normal", marginTop: "30px" }}
        >
          React
        </div>
        <div
          className="h3 text-style"
          style={{
            color: "white",
            fontWeight: "-moz-initial",
            marginTop: "15px",
          }}
        >
          The library for web and native user interfaces
        </div>
        <input type="button" className="button-style" value="Learn React" style={{backgroundColor:"#58c4dc",border:"none",color:"#2c3039"}} />
        <input type="button" className="button-style colorr" value="API Refrence" style={{backgroundColor:"#23272f", border:"grey",color:"white"}}/>
        <div className="space"></div>
      </div>
      <Comp2/>
    </>
  );
}
 function Comp2(){
    return(
        <>
            <div className="container-fluid comp2">
                <div className="h3">Create user interfaces</div>
                <div>from components</div>
            </div>
        </>
    )
 }