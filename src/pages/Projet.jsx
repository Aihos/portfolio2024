
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; 
import "../css/accueil.css";

import Data from "../data.json";



function Projet() {
 


    return (
        <>
     
                 
            <div className="flex">
                <Navbar />
                <main className="">
                
              projet
                </main>

            </div>

           

 <Footer />
           
        </>
    );
}
export default Projet;