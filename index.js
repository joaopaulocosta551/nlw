
    const linksSocialMedia = {
        gitHub: 'joaopaulocosta551',
        facebook: 'kenocosta',
        instagram: 'joaopaulocosta551',
        youtube: 'rocketseat',
        twitter: 'JooPaul64856038'
    }

    function changeSocialMidiaLinks() {
        for(let li of socialLink.children){
            const social = li.getAttribute('class')
            li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
        }
    }

    changeSocialMidiaLinks();

    function getGitHubProfileInfos() {
        const url = `https://api.github.com/users/${linksSocialMedia.gitHub} `
        
        // O fetch pega a reposta do meu json
        // O fetch não sabe que o arquivo da variavel url é um json. Por isso precisa pasar desse jeito. Linha 24
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userImg.src = data.avatar_url
            userLogin.textContent = data.login
        });
    }

    getGitHubProfileInfos()

