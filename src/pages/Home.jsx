
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; 
import "../css/accueil.css";
import Data from "../data.json";
import Projetlist from "../components/Projetlist";




function Home() {
    const [selectedItem, setSelectedItem] = useState(null);
    const images = Data.images;

    const openPopup = (item) => {
      setSelectedItem(item);
    };
    return (
        <>
     
                 
            <div className="flex">
                <Navbar />
                <main className="">
             {/*    <Projetlist  openPopup={openPopup} /> */}
              home
                </main>

            </div>

           

 <Footer />
           
        </>
    );
}
export default Home;