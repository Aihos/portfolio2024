import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; 
import Data from "../data.json";
import Projetlist from "../components/Projetlist";
import PresentationPortfolio from "../components/PresentationPortfolio";
import Mailpopup from "../components/Mailpopup";


function Portfolio() {
    const [selectedItem, setSelectedItem] = useState(null);

    const openPopup = (item) => {
      setSelectedItem(item);
    };
    return (
        <>
                  {/* <Navbar /> */}
            <div className="home">
                <Navbar />
                <main className="">
                <div className="ensemblemain">
                    <h1 className="my-8">Mes créations en vrac</h1>
                    <p>Enfin, un peu rangé voyons ;) </p>
                    <PresentationPortfolio/>
                    <Mailpopup/>
            <Footer />
            </div>
                </main>

            </div>
        

           
        </>
    );
}
export default Portfolio;