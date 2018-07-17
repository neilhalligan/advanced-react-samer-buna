import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
  it('should expose articles object', () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;
    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('should expose authors object', () => {
    const authors = api.getAuthors();
    const authorId = data.authors[0].id;
    const authorsFirstName = data.authors[0].firstName;
    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorsFirstName);
  });
});
