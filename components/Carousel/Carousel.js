/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container")
const string = 'You are here'
carouselContainer.append(string)
function carousel(){
  // Components
  const carousel = document.createElement('div')
  const leftBtn = document.createElement('div')
  const mountains = document.createElement('img')
  const computer = document.createElement('img')
  const trees = document.createElement('img')
  const turntable = document.createElement('img')
  const rightBtn = document.createElement('div')

  // Structure
  carousel.appendChild(leftBtn)
  carousel.appendChild(mountains)
  carousel.appendChild(computer)
  carousel.appendChild(trees)
  carousel.appendChild(turntable)
  carousel.appendChild(rightBtn)

  // Assignments
  carousel.classList.add('carousel')
  leftBtn.classList.add('left-button')
  rightBtn.classList.add('right-button')
  mountains.setAttribute('src', './assets/carousel/mountains.jpeg')
  computer.setAttribute('src', "./assets/carousel/computer.jpeg")
  trees.setAttribute('src', "./assets/carousel/trees.jpeg")
  turntable.setAttribute('src', "./assets/carousel/turntable.jpeg")

  rightBtn.textContent = 'right Button'
  return carousel
}

