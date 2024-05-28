// Exemple : src/components/UserList.js
import React from "react";
import Data from "../data.json";

const Projetlist = ({ openPopup }) => {
  // Utilisez les données comme bon vous semble
  const projet = Data.projet;

  return (
    <div>
      <h2>Liste des projets</h2>
      <ul>
        {projet.map(projet => (
          <li key={projet.id}>
            <h2>{projet.nom}</h2>
           <button onClick={() => openPopup(projet)}>Voir détails <img src={projet.img} alt="" />
           </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projetlist;
