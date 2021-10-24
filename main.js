const linksSocialMedia = {
  instagram: 'gomesnathie',
  twitter: 'nathiflix',
  github: 'nathannieg'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class') // contém a classe, que é o nome da rede social, o mesmo que está dentro do objeto
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  // store url
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  // fetch content inside url and get response
  // inside then there's a simplified arrow function
  fetch(url) // fetch gets an object
    .then(response => response.json()) // now we have a response in json
    .then(data => {
      // edit html based on info we got from api
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
    })
}

getGithubProfileInfos()
