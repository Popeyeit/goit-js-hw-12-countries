import templateAllCountries from '../templates/templateAllCountries.hbs';
import templateCountry from '../templates/templateCountry.hbs';
import {
  options,
} from '../js/options';
import {
  error,
} from '@pnotify/core';

export default function checkValid(data) {
  let string = null;
  if (data.length > 10) {
    error(options);
    return;
  }
  if (data.length > 1 && data.length < 10) {
    string = templateAllCountries(data);
  }
  if (data.length === 1) {
    string = templateCountry(data);
  }
  return string;
}
