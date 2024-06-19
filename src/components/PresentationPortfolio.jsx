// Exemple : src/components/UserList.js
import React from "react";
import Data from "../data.json";

const PresentationPortfolio = ({ openPopup }) => {
  // Utilisez les données comme bon vous semble
  const projet = Data.projet;

  return (
    <div className="portfolio">
      <div className="theme">
       
      </div>
      <div className="ensembleProjet">
        {projet.map(projet => (
         <div key={projet.id} className="projetContainer" >
            <h2>{projet.nom}</h2>
            <p>{projet.desc}</p>
            <img className="iconeprojet" src={projet.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresentationPortfolio;
