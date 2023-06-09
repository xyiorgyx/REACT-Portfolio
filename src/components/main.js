import {React, useState } from "react";
import Home from "./home";
import Projectcards from "./projectpage";
import Contact from "./contact";
import Footer from "./footer";
import Navigations from "./nav";

export default function Main() {

  const [currentPage, setCurrentPage] = useState("Home");
  const renderPage = () => {

    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Projectcards") {
      return <Projectcards />;
    }
    if (currentPage === "Contact") {
        return <Contact />;
      }
    return <Home/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigations currentPage={currentPage} handlePageChange={handlePageChange} />
     
      {renderPage()}

      <Footer/>
    </div>
  );
}