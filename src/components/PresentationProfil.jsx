// Exemple : src/components/UserList.js
import React from "react";
import Data from "../data.json";

const PresentationProfil = ({ openPopup }) => {
  // Utilisez les données comme bon vous semble
  const projet = Data.projet;

  return (
    <div className="portfolio">
      <div className="theme">
        <h2>Profil</h2>
      </div>
      <div className="ensembleProfl">
        <div className="presentationprofil">
<div>
  <h3>ile 1</h3>
</div>
<div>
  <h3>ile 2</h3>
</div>
<div>
  <h3>ile 3</h3>
</div>


        </div>
       
        
      </div>
    </div>
  );
};

export default PresentationProfil;
