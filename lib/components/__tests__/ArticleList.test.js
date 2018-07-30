import React from 'react';
import renderer from 'react-test-renderer';

import ArticleList from '../ArticleList';

const testProps = {
  articles: {
    a: { id: 'a' },
    b: { id: 'b' },
  },
  articleActions: {
    lookupAuthor: jest.fn(() => ({}))
  },
};

describe('ArticleList', () => {
  it('should render correctly', () => {
    const element = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();
    expect(element.children.length).toBe(2);
    expect(element).toMatchSnapshot();
  });
});
