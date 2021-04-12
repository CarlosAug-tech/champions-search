import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Champion from './Champions';
import dataChampions from '../../services/champions.json';

import { Container } from './styles';

export default function ChampionsContainer({
  searchChampion,
  classChampionName,
}) {
  const [filteredChampions, setFilteredChampions] = useState([]);

  const [favorites, setFavorites] = useState(() => {
    const champFavorite = localStorage.getItem('@FavoriteChampion:');

    if (champFavorite) {
      return JSON.parse(champFavorite);
    }

    return [];
  });

  function handleFavorite(id) {
    const favoriteIndex =
      favorites.length > 0 && favorites.find((champion) => champion.id === id);

    if (favoriteIndex) {
      setFavorites((state) => state.filter((c) => c.id !== favoriteIndex.id));
      return;
    }

    setFavorites((state) => [
      ...state,
      filteredChampions.find((champion) => champion.id === id),
    ]);

    localStorage.setItem('@FavoriteChampion:', JSON.stringify(favorites));
  }

  useEffect(() => {
    localStorage.setItem('@FavoriteChampion:', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (searchChampion) {
      setFilteredChampions(
        dataChampions.filter((champion) =>
          champion.name.toLowerCase().includes(searchChampion.toLowerCase()),
        ),
      );
    } else if (classChampionName) {
      if (classChampionName === 'Favorites') {
        setFilteredChampions(
          dataChampions.filter((champion) =>
            favorites.find((c) => c.id === champion.id),
          ),
        );
        return;
      }

      setFilteredChampions(
        dataChampions.filter((championClass) =>
          championClass.tags.find((champ) => champ === classChampionName),
        ),
      );
    } else {
      setFilteredChampions(dataChampions);
    }
  }, [searchChampion, classChampionName]);

  return (
    <Container data-testid="champions-container">
      {filteredChampions.map((champion) => (
        <Champion
          key={champion.id}
          champions={champion}
          handleFavorite={handleFavorite}
          champFavorite={favorites.filter((c) => c.id === champion.id)}
        />
      ))}
    </Container>
  );
}

ChampionsContainer.propTypes = {
  searchChampion: PropTypes.string,
  classChampionName: PropTypes.string,
};

ChampionsContainer.defaultProps = {
  searchChampion: '',
  classChampionName: '',
};
