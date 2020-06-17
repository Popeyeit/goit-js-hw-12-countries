import './styles.css';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import '@pnotify/core/dist/BrightTheme.css';
import checkValid from './js/checkValidInput'
import {
  options,
} from './js/options';
import {
  error,
} from '@pnotify/core';

const refs = {
  input: document.querySelector('.input-js'),
  container: document.querySelector('.container-js'),
};

refs.input.addEventListener('input', debounce(handleInputName, 500));

function handleInputName(e) {
  const nameCountry = e.target.value;
  refs.container.innerHTML = '';
  fetchCountries(nameCountry)
    .then(data => {
      const string = checkValid(data);
      if (string) {
        refs.container.innerHTML = string;
      }
      throw new Error('no Valid')
    })
    .catch(err => {
      error({
        ...options,
        text: 'Не валидный запрос.',
        title: 'УПС!'
      })
    });
}
