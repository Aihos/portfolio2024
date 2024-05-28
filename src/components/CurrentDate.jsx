import React from 'react';

// Fonction pour obtenir la date actuelle formatée
const getDate = () => {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Les mois commencent à 0
  const year = date.getFullYear().toString().slice(-2); // Prendre les deux derniers chiffres de l'année
  return `${day}/${month}/${year}`;
};

// Composant CurrentDate
const CurrentDate = () => {
  return (
    <div>
      <p>{getDate()}</p>
    </div>
  );
};

export default CurrentDate;