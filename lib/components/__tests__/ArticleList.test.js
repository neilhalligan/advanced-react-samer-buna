import React from 'react';
import { shallow } from 'enzyme';

import testSetup from '../../testSetup';
import ArticleList from '../ArticleList';

const testProps = {
  articles: {
    a: { id: 'a'},
    b: { id: 'b'},
  },
};

describe('ArticleList', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );
    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
