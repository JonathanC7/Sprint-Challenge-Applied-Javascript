// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    const articlesObject = response.data.articles
    const articleTopics = Object.entries(articlesObject)
    const articleComponents = articleTopics.map(item => {return item[1]})

    for(let i in articleComponents){
        articleComponents[i].forEach((list) => {
            cardsContainer.appendChild(cardMaker(list))
        })
    }
    console.log(articleComponents)
    
})
.catch(error => { console.log(error)})
function cardMaker(obj){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorsName = document.createElement('span')

    // Structure 
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    card.appendChild(authorsName)

    // Assignments
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    img.setAttribute('src', obj.authorPhoto)

    // Filling Out Content
    headline.textContent = obj.headline
    authorsName.textContent = obj.authorName

    return card
}