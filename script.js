const container = document.querySelector(".container");

function generateStartGrid(){
  for(let i=0; i<=255; i++){
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("style", "width: 60px; height: 60px; border: 2px solid black; box-sizing: border-box;");
    container.appendChild(square);
    square.addEventListener("mouseenter", ()=>{
      square.setAttribute("style", "width: 60px; height: 60px; background-color:yellow;");
  })
}
}

generateStartGrid();

const generateNewGridBtn = document.querySelector("#generator");
generateNewGridBtn.addEventListener("click", ()=>{
  let numSquaresPerSide = prompt("How many squares would you like on each side of the grid?");
  if(numSquaresPerSide>=1 && numSquaresPerSide<=100){
    container.replaceChildren();  //removes all child nodes
    for(let i=0; i<numSquaresPerSide**2; i++){
      let squareWidth = 960/numSquaresPerSide;
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("style", "width:"+squareWidth+"px; height:"+squareWidth+"px; border: 2px solid black; box-sizing: border-box;");
      container.appendChild(square);
      square.addEventListener("mouseenter", ()=>{
      square.setAttribute("style", "width:"+squareWidth+"px; height:"+squareWidth+"px; border: 2px solid black; box-sizing: border-box; background-color: black;");
      })
    }
  }
})
