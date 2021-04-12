import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import ChampionsContainer from '../../components/ChampionsContainer';

import { Container } from './styles';

import logo from '../../assets/Image/logo.png';
import Input from '../../components/Input';
import ClassChampions from '../../components/ClassChampions';

export default function Home() {
  const [nameChampion, setNameChampion] = useState('');
  const [classChampionName, setClassChampionName] = useState('');

  return (
    <Container>
      <img src={logo} alt="logo" />
      <Input
        type="text"
        htmlFor="search"
        labelText="Pesquise pelo nome do campeão"
        icon={FaSearch}
        onChange={(e) => setNameChampion(e.target.value)}
        value={nameChampion}
      />
      <ClassChampions
        classChampionName={classChampionName}
        setClassChampionName={setClassChampionName}
      />
      <ChampionsContainer
        searchChampion={nameChampion}
        classChampionName={classChampionName}
        setNameChampion={setNameChampion}
        setClassChampionName={setClassChampionName}
      />
    </Container>
  );
}
