class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, article) => {
      acc[article.id] = article;
      return acc;
    }, {});
  }
  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }

  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;
