//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
const randomImg = document.querySelector('img')

function getFetch(){
  randomImg.src = "https://picsum.photos/200/300"
}

