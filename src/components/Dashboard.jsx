import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Dashboard({ children }) {
  return (
    <div className="container-fluid w-100 h-100">
      <div className="row overflow-auto">
        <Navbar />
        <article className="container-fluid">{children}</article>
        <Footer />
      </div>
    </div>
  );
}
