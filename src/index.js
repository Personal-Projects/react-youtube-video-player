import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import key from './youtubeKey';
import YTSearch from 'youtube-api-search';

YTSearch({key: key, term: 'kittens'}, function(data) {
  console.log(data);
});

// Create a new component. This should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />  
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));