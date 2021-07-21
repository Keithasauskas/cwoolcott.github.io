var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');
var loadMoreButton = document.getElementById('loadmore-button');
var displayData;
var currentIndex = 0;

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=20';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      displayData = data;
      renderProfiles(currentIndex);
      // Use the console to examine the data
      loadMoreButton.setAttribute("style", "display:block")
    });
}

function renderProfiles(startIndex) {

  // TODO: Loop through the data and generate your HTML
  for (var i = startIndex; i < displayData.length && i < startIndex + 5; i++) {
    var userName = document.createElement('h2');
    var userUrl = document.createElement('a');
    var userAvatar = document.createElement('img');
    var hr = document.createElement('hr');

    userName.textContent = displayData[i].login;
    userAvatar.src = displayData[i].avatar_url;
    userAvatar.setAttribute("width", "250");
    userUrl.href = displayData[i].html_url
    userUrl.textContent = displayData[i].html_url;
    userUrl.setAttribute("target", "usertab");


    userContainer.append(userAvatar);
    userContainer.append(userName);
    userContainer.append(userUrl);
    userContainer.append(hr);

    currentIndex++;
    if (currentIndex >= displayData.length) {
      loadMoreButton.setAttribute("style", "display:none")
    }
  }
}


fetchButton.addEventListener('click', getApi);
loadMoreButton.addEventListener('click', function (e) {
  renderProfiles(currentIndex);
});
