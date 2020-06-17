import {
  Stack,
} from '@pnotify/core';

const myStack = new Stack({
  dir1: 'left',
  dir2: 'top',
  push: 'bottom',
  firstpos1: 25,
  firstpos2: 25,
  spacing1: 36,
  spacing2: 36,
  context: document.querySelector('.position'),
});

const options = {
  text: 'Too many mathes. Please enter a more specific query',
  type: 'error',
  width: '400px',
  minHeight: 'auto',
  icon: true,
  closer: false,
  sticker: false,
  stack: myStack,
  remove: true,
  delay: 1000,
};

export {
  options
}
