// Exemple : src/components/UserList.js
import React from "react";
import Data from "../data.json";

const PresentationContact = ({ openPopup }) => {
  // Utilisez les données comme bon vous semble
  const projet = Data.projet;

  return (
    <div className="portfolio">
      <div className="theme">
        <h2>Contact</h2>
      </div>
      <div className="ensembleContact">
        <div className="presentationcontact">
<h1>contact</h1>
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
       
        
      </div>
    </div>
  );
};

export default PresentationContact;
