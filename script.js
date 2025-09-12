const container = document.querySelector(".container");
const generateNewGridBtn = document.querySelector("#generator");

function generateStartGrid(){
  for(let i=0; i<=255; i++){
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("style", "width: 60px; height: 60px; border: 1px solid black; box-sizing: border-box; opacity:0;");
    container.appendChild(square);

    square.addEventListener("mouseenter", ()=>{
      if(square.style.opacity<=0.9){
          square.style.opacity = +square.style.opacity+0.1;
      }
      square.setAttribute("style", "width: 60px; height: 60px; border: 1px solid black; box-sizing: border-box; background-color: rgb("+generateRandColor()+"); opacity:"+square.style.opacity+";");    })
  }
}

generateStartGrid();


generateNewGridBtn.addEventListener("click", ()=>{
  let numSquaresPerSide = prompt("How many squares would you like on each side of the grid?");
  if(numSquaresPerSide>=1 && numSquaresPerSide<=100){
    container.replaceChildren();  //removes all child nodes
    for(let i=0; i<numSquaresPerSide**2; i++){
      let squareWidth = 960/numSquaresPerSide;
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("style", "width:"+squareWidth+"px; height:"+squareWidth+"px; border: 1px solid black; box-sizing: border-box; opacity:0;");
      container.appendChild(square);

      square.addEventListener("mouseenter", ()=>{
        if(square.style.opacity<=0.9){
          square.style.opacity = +square.style.opacity+0.1;
        }
        square.setAttribute("style", "width:"+squareWidth+"px; height:"+squareWidth+"px; border: 1px solid black; box-sizing: border-box; background-color: rgb("+generateRandColor()+"); opacity:"+square.style.opacity+";");
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