function getJSON (url, successHandler, errorHandler) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.response);
      successHandler && successHandler(data);
    } else {
      errorHandler && errorHandler(xhr.status);
    }
  }
  xhr.onerror = function () {
    errorHandler && errorHandler(`Network Error!`);
  }
  xhr.send(null);
}

function getJSONByPromise (url) {
  return new Promise (
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function () {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.response);
          resolve(data);
        } else {
          reject(xhr.status);
        }
      }
      xhr.onerror = function () {
        reject(`Network Error!`);
      }
      xhr.send(null);
    }
  )
}