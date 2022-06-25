import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import PlayerProfilePage from './Components/PlayerProfile/PlayerProfilePage.js';
import { useParams } from 'react-router-dom';
import { url } from './config.js';

const PlayerProfile = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState({});
  console.log('params >>>', params);

  useEffect(() => {
    fetch(`${url}/getPlayer/${params.playerId}`)
      .then((res) => res.json())
      .then((player) => {
        console.log('player >>>', player);
        setPlayer(player);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <PlayerProfilePage player={player} loading={loading} />
      </Container>
      <Footer />
    </>
  );
};

PlayerProfile.propTypes = {};

export default PlayerProfile;
