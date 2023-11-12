import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./page.css"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";




export default function PageTemplateLayout({ children }) {
  return (
    <main className="index">
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
}
