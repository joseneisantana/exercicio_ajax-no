document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/joseneisantana')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = `@${json.login}`;
            avatarElement.src = json.avatar_url;
            reposElement.childNodes[2].textContent = json.public_repos;
            followersElement.childNodes[2].textContent = json.followers;
            followingElement.childNodes[2].textContent = json.following;
            linkElement.href = json.html_url;
        })
        .catch(function(error) {
            console.error('Erro:', error);
        });
});
