const container = document.querySelector(".container");
const generateNewGridBtn = document.querySelector("#generator");
const multicolorButton = document.querySelector("#multicolor-mode");

function generateStartGrid(){
  for(let i=0; i<=195; i++){
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("style", "width: 40px; height: 40px; border: 1px solid black; box-sizing: border-box; opacity:0;");
    container.appendChild(square);

    square.addEventListener("mouseenter", ()=>{
      if(square.style.opacity<=0.9){
          square.style.opacity = +square.style.opacity+0.1;
      }
      square.setAttribute("style", "width: 40px; height: 40px; border: 1px solid black; box-sizing: border-box; background-color: black; opacity:"+square.style.opacity+";");    })
  }
}

generateStartGrid();


generateNewGridBtn.addEventListener("click", ()=>{
  let numSquaresPerSide = prompt("How many squares would you like on each side of the grid?");
  let multicolor = prompt("Do you want to go crazy with it?!")
  if(numSquaresPerSide>=1 && numSquaresPerSide<=100){
    container.replaceChildren();  //removes all child nodes
    for(let i=0; i<numSquaresPerSide**2; i++){
      let squareWidth = 560/numSquaresPerSide;
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("style", "width:"+squareWidth+"px; height:"+squareWidth+"px; border: 1px solid black; box-sizing: border-box; opacity:0;");
      container.appendChild(square);

      square.addEventListener("mouseenter", ()=>{
        if(square.style.opacity<=0.9){
          square.style.opacity = +square.style.opacity+0.1;
        }
        if(multicolor==="yes"){
          square.setAttribute("style", "width:"+squareWidth+"px; height:"+squareWidth+"px; border: 1px solid black; box-sizing: border-box; background-color: rgb("+generateRandColor()+"); opacity:1");

        }
        else{
          square.setAttribute("style", "width:"+squareWidth+"px; height:"+squareWidth+"px; border: 1px solid black; box-sizing: border-box; background-color: black; opacity:"+square.style.opacity+";");
        }
      })
    }
  }
  else if(numSquaresPerSide<1){
    alert("The number of squares per side has to be at least 1.");
  }
  else if(numSquaresPerSide>100){
    alert("There can only be a maximum of 100 squares per side.");
  }
})


function generateRandColor(){
  let redCode = Math.floor(Math.random()*255);
  let greenCode = Math.floor(Math.random()*255);
  let blueCode = Math.floor(Math.random()*255);
  return `${redCode}, ${greenCode}, ${blueCode}`;
}