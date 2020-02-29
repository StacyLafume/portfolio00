function startGame (){
  console.log("new game starting")
// global variable that is the first pair selected (first clicked, first of two cards)
var firstElement = null
// array of card imgs
let imgArray = ["wild-3837281_640.jpg","wild-3837281_640.jpg","chameleon-384957_640.jpg","chameleon-384957_640.jpg","snake-298710_640.jpg","snake-298710_640.jpg","nature-2715210_640.jpg","nature-2715210_640.jpg","parrot-2708091_640.jpg","parrot-2708091_640.jpg"]
//how we shufle the images, the goal is to put them in random positions
shuffle(imgArray)
//grabs all of the sections elements that holds our cards,
var elArray = document.querySelectorAll(".gridItem")
//global boolean allows user to click cards if true and disallows if false
var clickOkay = true
//loop thruogh all of the section elements
elArray.forEach((currentClickElement,index) => {
  //sets the img src inside the section using the index to the specific element in the img array
  currentClickElement.firstElementChild.src = imgArray[index]
  currentClickElement.firstElementChild.classList.add("hide")
  currentClickElement.firstElementChild.classList.remove('youCantClick')
  console.log("cant click")
  //adds a click event listener to the section element
  currentClickElement.addEventListener('click',
  // function that runs when the card is clicked
  function (event) {
    //example of closure
    console.log("this is currentClick ",currentClickElement)
    //aborts the click handler when we dont want the user to click
    if(clickOkay === false){
      return "quit"
    }
    if (currentClickElement.classList.contains ("youCantClick")){
      return "quit"
    }
    currentClickElement.classList.add("youCantClick")
    if (firstElement === null){
      firstElement = currentClickElement
      console.log("this is your first click", currentClickElement )
    }else{
      if(firstElement.firstElementChild.src === currentClickElement.firstElementChild.src){
        console.log("match")
      }else{
        clickOkay= false
        setTimeout((elementOne,elementTwo) => {
          clickOkay = true
          elementOne.firstElementChild.classList.toggle("hide");
          elementTwo.firstElementChild.classList.toggle("hide");
          // elementTwo.classList.toggle("selected");
          // elementOne.classList.toggle("selected")
          elementOne.classList.remove("youCantClick")
          elementTwo.classList.remove("youCantClick")
        },2000,firstElement,currentClickElement)
      }
      firstElement = null
    }
    console.log("This is the event",event.target)
    // currentClickElement.classList.toggle("selected");
    currentClickElement.firstElementChild.classList.toggle("hide")
  })
})

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
}

window.addEventListener('load', () => startGame())

document.getElementById("reset").addEventListener('click', ()=>{
location.reload()
//return img over
})
