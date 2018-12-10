import elements from './base';

export const getInput = () => elements.input.value;

export const clearInput = () => {
  elements.input.value = '';
};

export const renderQRCode = (url) => {
  const markup = `
    <img src="https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=200x200" alt="qr code" class="qr-code-img">
    <div class="buttons">
      <a class="btn btn--download" download href="https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=200x200" target="_blank">Download</a>
      <a href="#" class="btn btn--print">Print</a>
    </div>
  `;
  elements.qrCodeBox.innerHTML = markup;
};
