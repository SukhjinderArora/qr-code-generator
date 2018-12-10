import '@babel/polyfill';

import '../styles/main.scss';

import elements from './base';
import * as qrGeneratorView from './qrGeneratorView';

/**
 * TODO(s)
 * 1. Design the overall webpage in HTML and CSS
 * 2. Required Elements: Input field, Submit button, Image
 * 3. Develop the app using http://goqr.me/api/ Api
 * 4. Use Axios lib for async network requests
 *
 * FEATURES:
 * 1. Enter the URL or text to generate the QR Code
 * 2. Generate an image in the image container
 * 3. Have an option to either download or print the image
 */

// Controller
let encodedURL = '';

const createEncodedURL = () => encodeURIComponent(qrGeneratorView.getInput().trim());

elements.form.addEventListener('submit', (event) => {
  event.preventDefault();
  encodedURL = createEncodedURL();
  if (encodedURL === '') return;
  qrGeneratorView.renderQRCode(encodedURL);
  qrGeneratorView.clearInput();
});

elements.qrCodeBox.addEventListener('click', (event) => {
  const printBtn = document.querySelector('.btn--print');
  if (event.target === printBtn) {
    qrGeneratorView.printImg(encodedURL);
  }
});
