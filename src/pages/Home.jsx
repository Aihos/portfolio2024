// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../css/accueil.css";
import Data from "../data.json";
import Projetlist from "../components/Projetlist";
import PresentationPortfolio from "../components/PresentationPortfolio";
import PresentationHome from "../components/PresentationHome";
import PresentationProfil from "../components/PresentationProfil";
import PresentationContact from "../components/PresentationContact";
import CurrentDate from "../components/CurrentDate";

import { gsap } from "gsap";

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const images = Data.images;
  const boxRef1 = useRef(null); // Déclarer boxRef ici
  const boxRef2 = useRef(null); // Déclarer boxRef ici

  const openPopup = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const t1 = gsap.timeline();

    t1.to(boxRef1.current, { rotation: 360, duration: 2 });
    t1.to(boxRef2.current, { rotation: -360, duration: 2, delay: -0.5 });
  }, []);

  return (
    <>
      <div className="home">
        <Navbar />

        <main ref={boxRef1} className="">
            <div className="ensemblemain">
                
           
          <div className="hauttete">
            <div className="gris presentation">
              <div className="txtpresentation">
                <h1>Enchanté, Hugo</h1>
                <p>Je suis un simple développeur</p>
              </div>

              <img id="avatar" src="./image/avatar.png" alt="" />
            </div>

            <div className="gris vignetdate">
            <img id="" src="./image/horloge.png" alt="" />
                <CurrentDate />
                         </div>
                         <div className="gris vignetMeteo">
            <img id="" src="./image/moon.png" alt="" />
                <p>30°</p>
                         </div>

                         <div className="gris vignetMeteo">
            <img id="" src="./image/mail.png" alt="" />
              
                         </div>
          </div>

          <div className="bastete">
             <div className="gris texteLorem">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec interdum nulla. Aenean sollicitudin bibendum lectus sed porta. Nullam a velit efficitur, imperdiet ligula ac, suscipit erat. Nunc suscipit pharetra tincidunt. 
<br></br><br></br>
Praesent vulputate semper efficitur. Praesent lobortis magna sed hendrerit vestibulum. Pellentesque lobortis pulvinar orci sed bibendum. Nunc vulputate lorem a ipsum fringilla, eget venenatis neque suscipit. 
<br></br><br></br>
Curabitur luctus quis erat ut condimentum. Mauris sagittis dignissim sem

             </div>

          </div>

          <div className="directionBas">
             <div className="gris texteLorem">
            
             
            
                <p>Commencer à me découvrir</p>
                <img id="" src="./image/fleche.png" alt="" />
                         </div>
            

          </div>

          <Footer />
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
