document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#meunome');
    const userElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#linkGitHub');

    fetch('https://api.github.com/users/tharcilacontursi')
    .then(function(res){
        return res.json();
    })
    .then(function(json){
        nameElement.innerText = json.name;
        userElement.innerText = json.login;
        avatarElement.src = json.avatar_url;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    });
});
