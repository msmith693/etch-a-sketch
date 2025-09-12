const container = document.querySelector(".container");



for(let i=0; i<=255; i++){
  let square = document.createElement("div");
  square.classList.add("square");
  square.setAttribute("style", "width: 60px; height: 60px; border: 2px solid black; box-sizing: border-box;");
  container.appendChild(square);
}
