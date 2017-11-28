import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This should produce some HTML
const App = () => {
  return <div>Exploding Kittens</div>
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));