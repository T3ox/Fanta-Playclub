import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (game: string) => {
    navigate(`/players/${game}`);
  };

  return (
    <div className="home-page">
      <h1>Seleziona il gioco</h1>
      <button onClick={() => handleNavigate('lol')}>League of Legends</button>
      <button onClick={() => handleNavigate('valorant')}>Valorant</button>
    </div>
  );
};

export default HomePage;