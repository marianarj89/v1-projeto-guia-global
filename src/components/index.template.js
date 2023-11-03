import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./index.css"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

export default function IndexTemplateLayout({ children }) {
  return (
    <main className="index">
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
}
