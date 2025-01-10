import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import { Container, Row, Col,nav } from "react-bootstrap";
// import NavBar from "../layout/Layout";
import NavBar from "../layout/Header";
import Home from "../pages/Home";
import Learn from "../pages/Learn";
import Refrence from "../pages/Refrence";
import Community from "../pages/Community";
import Blog from "../pages/Blog"
import Layout from "../layout/Layout";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="Learn" element={<Learn/>}/>
                    <Route path="Refrence" element={<Refrence/>}/>
                    <Route path="Community" element={<Community/>}/>
                    <Route path="Blog" element={<Blog/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}