import React, { useState, useEffect } from 'react';
import SkillDecompositionPage from './SkillDecompositionPage.js';
import { url } from '../../config.js';

export default function SkillDecompositionState() {
  const [skillDecomposition, setSkillDecomposition] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect((_) => {
    const fetchData = async (_) => {
      const response = await fetch(`${url}/skillDecomposition`);
      const json = await response.json();

      setSkillDecomposition(json);
    };

    fetchData();
    setLoading(false);
  }, []);

  return (
    <SkillDecompositionPage
      skillDecomposition={skillDecomposition}
      loading={loading}
    />
  );
}
