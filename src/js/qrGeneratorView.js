import elements from './base';

export const getInput = () => elements.input.value;

export const clearInput = () => {
  elements.input.value = '';
};

export const renderQRCode = (url) => {
  const imageURL = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=300x300&format=svg`;
  const markup = `
    <img src="${imageURL}" alt="qr code" class="qr-code-img">
    <div class="buttons">
      <a class="btn btn--download" download href="${imageURL}" target="_blank">Download</a>
      <a href="#" class="btn btn--print">Print</a>
    </div>
  `;
  elements.qrCodeBox.innerHTML = markup;
};

export const printImg = (url) => {
  const imageURL = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=400x400&format=svg`;
  const win = window.open();
  const image = `
    <img src="${imageURL}" alt="qr code" class="qr-code-img" onload="window.print();window.close()">  
  `;
  win.document.write(image);
};
