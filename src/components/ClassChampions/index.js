import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { FaStar } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import dataClassChampions from '../../services/classchampions';

import { Container } from './styles';

export default function ClassChampions({
  classChampionName,
  setClassChampionName,
}) {
  const searchClass = useCallback(
    (name) => {
      setClassChampionName(name);
    },
    [classChampionName],
  );

  return (
    <Container testexd={classChampionName}>
      {dataClassChampions.map((classChampion) => (
        <button
          key={classChampion.id}
          type="button"
          onClick={() => searchClass(classChampion.name)}
        >
          {classChampion.name === 'Favorites' || classChampion.name === '' ? (
            <>
              {classChampion.name === '' ? (
                <MdDashboard
                  size={classChampion.name === classChampionName ? 25 : 20}
                  color={
                    classChampion.name === classChampionName
                      ? '#FFD700'
                      : '#6f87b9'
                  }
                />
              ) : (
                <FaStar
                  size={classChampion.name === classChampionName ? 25 : 18}
                  color={
                    classChampion.name === classChampionName
                      ? '#FFD700'
                      : '#6f87b9'
                  }
                />
              )}
            </>
          ) : (
            <img
              src={
                classChampion.name === classChampionName
                  ? classChampion.urlActive
                  : classChampion.url
              }
              alt={classChampion.name}
            />
          )}
          <div>
            <span>
              {classChampion.name === '' ? 'All' : classChampion.name}
            </span>
          </div>
        </button>
      ))}
    </Container>
  );
}

ClassChampions.propTypes = {
  classChampionName: PropTypes.string,
  setClassChampionName: PropTypes.func.isRequired,
};

ClassChampions.defaultProps = {
  classChampionName: '',
};
