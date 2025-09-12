const container = document.querySelector(".container");

// let test = document.createElement("div");
// test.setAttribute("style", "width: 60px; height: 60px; background-color:black;");
// test.id = "test";
// container.appendChild(test);

// // const test2 = document.getElementById("test")

// test.addEventListener("mouseenter", (event)=>{
//   event.target.setAttribute("style", "width: 60px; height: 60px; background-color:yellow;");
// })

for(let i=0; i<=255; i++){
  let square = document.createElement("div");
  square.classList.add("square");
  square.setAttribute("style", "width: 60px; height: 60px; border: 2px solid black; box-sizing: border-box;");
  container.appendChild(square);
  square.addEventListener("mouseenter", ()=>{
    square.setAttribute("style", "width: 60px; height: 60px; background-color:yellow;");
})
}

// const squares = document.querySelectorAll("square");
// for(const square of squares){
//   square.addEventListener("mouseenter", (event)=>{
//     event.target.setAttribute("style", "width: 60px; height: 60px; background-color:yellow;");
//   })
// }
// squares.forEach(()=>{
//   square.addEventListener("mouseenter", (event)=>{
//     event.target.setAttribute("style", "width: 60px; height: 60px; background-color:yellow;");
//     // addHighlight(square);
//   })

// })