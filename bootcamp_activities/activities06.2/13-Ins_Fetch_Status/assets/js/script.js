var requestUrl = 'https://api.github.com/orgs/nodejs/xxrepos?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        responseText.textContent = "YAY! " + response.status;
      }
      else if (response.status === 404) {
        responseText.textContent = "NOO! " + response.status;
      }
      return response.json();
    })

}

getApi(requestUrl);
