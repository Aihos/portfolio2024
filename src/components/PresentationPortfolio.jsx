// Exemple : src/components/UserList.js
import React from "react";
import Data from "../data.json";

const PresentationPortfolio = ({ openPopup }) => {
  // Utilisez les données comme bon vous semble
  const projet = Data.projet;

  return (
    <div className="portfolio">
      <div className="theme">
        <h2>Portfolio</h2>
      </div>
      <div className="ensembleProjet">
        {projet.map(projet => (
          <div key={projet.id} className="projetContainer" style={{ backgroundImage: `url(${projet.img})` }}>
            <h2>{projet.nom}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresentationPortfolio;
