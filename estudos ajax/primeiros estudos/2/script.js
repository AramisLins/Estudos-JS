const loadData = () => {
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api.github.com/users/AramisLins", true)
    xhr.send(null)

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            const res = JSON.parse(xhr.responseText)
            
            const nome = res.name
            const avatarUrl = res.avatar_url
            const followers = res.followers
            const html_url = res.html_url

            // console.log({nome, avatarUrl, followers, html_url})

            //criando elemento img
            const avatarEl = document.createElement("img")
            avatarEl.setAttribute("src", avatarUrl)
            avatarEl.setAttribute("width", "128")
            // console.log(avatarEl)

            //criando elemento texto
            const nomeEl = document.createElement("h1")
            nomeEl.innerText = nome

            //criando elemento seguidores
            const followersEl = document.createElement("p")
            followersEl.innerText = `Followers: ${followers}`
            
            //criando elemento blog
            const blogEl = document.createElement("a")
            blogEl.setAttribute("href", `${html_url}`)
            blogEl.innerText = html_url


            document.body.appendChild(avatarEl)
            document.body.appendChild(nomeEl)
            document.body.appendChild(followersEl)
            document.body.appendChild(blogEl)
            
        }
    }
}