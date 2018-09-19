class DataApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
      timestamp: rawData.startTime,
    };
    this.lastSubscriptionId = 0
    this.subscribers = {}
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, article) => {
      acc[article.id] = article;
      return acc;
    }, {});
  }

  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  }

  subscribe = (cb) => {
    this.lastSubscriptionId++;
    this.subscribers[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  }

  unsubscribe = (subscriptionId) => {
    delete this.subscribers[subscriptionId];
  }

  notifySubscribers = () => {
    Object.values(this.subscribers).forEach(cb => cb());
  }

  mergeState = (newState) => {
    this.data = {
      ...this.data,
      ...newState,
    }
    this.notifySubscribers();
  }

  startClock = () => {
    setInterval(() =>{
      this.mergeState(
        {timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})}
      )
    }, 1000)
  }

  setSearchTerm = (searchTerm) => {
    this.mergeState({ searchTerm });
  }

  getState = () => {
    return this.data;
  }
}

export default DataApi;
