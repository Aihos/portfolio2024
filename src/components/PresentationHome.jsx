// Exemple : src/components/UserList.js
import React from "react";
import Data from "../data.json";

const PresentationHome = ({ openPopup }) => {
  // Utilisez les données comme bon vous semble
  const projet = Data.projet;

  return (
    <div className="portfolio">
      <div className="theme">
        <h2>Home</h2>
      </div>
      <div className="ensembleHome">
        <div className="presentationhome">
<h1>Hugo Leray</h1>
<h2>Developpeur web</h2>

<p>Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. Lorem Ipsum has been the industry's
   standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make 
    a type specimen book. It has survived not only five centuries, but
    also the leap into electronic typesetting, remaining essentially 
    unchanged. It was popularised in the 1960s with the release of Letraset
     sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of 
      Lorem Ipsum.</p>


        </div>
        <div>
          <img src="./image/hugoportfoli2o.png" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default PresentationHome;
