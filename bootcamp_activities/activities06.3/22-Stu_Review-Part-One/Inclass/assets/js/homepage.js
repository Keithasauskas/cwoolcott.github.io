var userFormEl = document.querySelector('#user-form');
var languageButtonsEl = document.querySelector('#language-buttons');
var nameInputEl = document.querySelector('#username');
var repoContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

var formSubmitHandler = function (event) {
  event.preventDefault();

  var username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);

    repoContainerEl.textContent = '';
    nameInputEl.value = '';
  } else {
    alert('Please enter a GitHub username');
  }
};

var buttonClickHandler = function (event) {
  // What is `event.target` referencing?
  // Getting the DOM element clicked HTML/CSS/JS

  // console.log("event.target", event.target);
  // console.log("class", event.target.getAttribute('class'))
  // console.log("data-whatever", event.target.getAttribute('data-whatever'));
  // console.log("data-language", event.target.getAttribute('data-language'));


  var language = event.target.getAttribute('data-language');

  // Why is this `if` block in place?
  // Only Runs if there a language!
  if (language) {
    getFeaturedRepos(language);

    repoContainerEl.textContent = '';
  }
};

var getUserRepos = function (user) {
  var apiUrl = 'https://api.github.com/users/' + user + '/repos';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayRepos(data, user);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to GitHub');
    });
};

var getFeaturedRepos = function (language) {
  // What are the query parameters doing here?
  // q is the query that pulls the language, is:featured is pulling just featured repos. 
  // sort is order by the number of issues needing help
  var apiUrl = 'https://api.github.com/search/repositories?q=' + language + '+is:featured&sort=help-wanted-issues';

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayRepos(data.items, language);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  });
};

var displayRepos = function (repos, searchTerm) {
  if (repos.length === 0) {
    repoContainerEl.textContent = 'No repositories found.';
    // What would happen if there was no `return;` here?
    // If no return we do not exit function. 
    // If  return we  exit function.
    return;
  }

  repoSearchTerm.textContent = searchTerm;

  for (var i = 0; i < repos.length; i++) {
    // What is the result of this string concatenation?
    // <git-username>/<github-repo-name>
    var repoName = repos[i].owner.login + '/' + repos[i].name;

    var repoEl = document.createElement('div');
    repoEl.classList = 'list-item flex-row justify-space-between align-center';

    var titleEl = document.createElement('span');
    titleEl.textContent = repoName;

    repoEl.appendChild(titleEl);

    var statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    if (repos[i].open_issues_count > 0) {
      statusEl.innerHTML =
        "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
    } else {
      statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    }

    repoEl.appendChild(statusEl);

    repoContainerEl.appendChild(repoEl);
  }
};

userFormEl.addEventListener('submit', formSubmitHandler);
languageButtonsEl.addEventListener('click', buttonClickHandler);
