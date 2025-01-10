import { Outlet, Link } from "react-router-dom";

import NavBar from "./Header";

export default function Layout() {
    return (
      <>
      <NavBar/>
      <br />
      <br />
      <br />
       <Outlet/>
      </>
    );
  }
