import "regenerator-runtime/runtime";
import cloneDeep from "lodash-es";
import "core-js";
import { async } from "regenerator-runtime/runtime";

if (module.hot) {
  module.hot.accept();
}

const url = "https://api.chucknorris.io/jokes/random";
const jokeBtn = document.getElementById('jokeBtn');
const panel = document.querySelector(".jokepanel");

jokeBtn.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const jokes = await response.json();
    panel.innerHTML = jokes.value;
  } catch (error) {
    console.log('Fetch error:', error);
    }
    
});