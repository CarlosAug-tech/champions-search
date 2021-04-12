import React from 'react';

import { shallow } from 'enzyme';

import ChampionsContainer from '~/components/ChampionsContainer';
import Champion from '~/components/ChampionsContainer/Champions';

describe('ChampionsContainer component', () => {
  it('should be able list the champions of game League of Legends ', () => {
    const wrapper = shallow(<ChampionsContainer />);

    // eslint-disable-next-line jest/valid-expect
    expect(wrapper.find(Champion)).toHaveLength(152);
  });
});
