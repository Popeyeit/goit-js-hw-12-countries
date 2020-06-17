import './styles.css';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import '@pnotify/core/dist/BrightTheme.css';
import checkValid from './js/checkValidInput'


const refs = {
  input: document.querySelector('.input-js'),
  container: document.querySelector('.container-js'),
};
console.log(refs.input);

refs.input.addEventListener('input', debounce(handleInputName, 500));

function handleInputName(e) {
  const nameCountry = e.target.value;
  refs.container.innerHTML = '';
  fetchCountries(nameCountry)
    .then(data => {
      const string = checkValid(data);
      console.log(string);
      if (string) {
        refs.container.innerHTML = string;
      }
    })
    .catch(console.log);
}
