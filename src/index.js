import "regenerator-runtime/runtime";
import cloneDeep from "lodash-es";
import "core-js";
import { async } from "regenerator-runtime/runtime";
import ReactDom from 'react-dom';
import React from 'react';

if (module.hot) {
  module.hot.accept();
}

const url = "https://api.chucknorris.io/jokes/random";
const jokeBtn = document.getElementById('jokeBtn');
const panel = document.querySelector(".jokepanel");

function App() {
  return (
    <div>
      <h1>Hi there from React!</h1>
    </div>
  )
}
ReactDom.render(<App />, document.getElementById('app'));

jokeBtn.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const jokes = await response.json();
    panel.innerHTML = jokes.value;
  } catch (error) {
    console.log('Fetch error:', error);
    }
    
});