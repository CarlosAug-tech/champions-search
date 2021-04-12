import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

import { Container } from './styles';

export default function Champion({ champions, handleFavorite, champFavorite }) {
  return (
    <Container>
      <img src={champions.icon} alt={champions.name} />
      <button type="button" onClick={() => handleFavorite(champions.id)}>
        <FaStar
          size={17}
          color={champFavorite.length > 0 ? '#FFD700' : '#fff'}
        />
      </button>
      <div>
        <span>{champions.name}</span>
      </div>
    </Container>
  );
}

Champion.propTypes = {
  champions: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  handleFavorite: PropTypes.func.isRequired,
  champFavorite: PropTypes.array,
};
