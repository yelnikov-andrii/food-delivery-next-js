import axios from 'axios';

export const useSendData = () => {
  function sendData(dataObj: any, url: string, additionalFunction: any) {
    axios.post(url, dataObj)
      .then(response => {
        additionalFunction();
      });
  }

  return { sendData };
};