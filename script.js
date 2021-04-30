document
  .querySelector(".hamburguer")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );

  

document.querySelector(".text1").style.display = "none"
document.querySelector(".text2").style.display = "none"
document.querySelector(".text3").style.display = "none"
document.querySelector(".text4").style.display = "none"
document.querySelector(".text5").style.display = "none"
document.querySelector(".text6").style.display = "none"

function mouseover (a,t) {

  document
  .querySelector(`${a}`)
  .addEventListener(
    "mouseover",
    () => (document.querySelector(`${t}`).style.display = "flex")
  );

  document
  .querySelector(`${a}`)
  .addEventListener(
    "mouseout",
    () => (document.querySelector(`${t}`).style.display = "none")
  );

} 

mouseover (".a1", ".text1")
mouseover (".a2", ".text2")
mouseover (".a3", ".text3")
mouseover (".a4", ".text4")
mouseover (".a5", ".text5")
mouseover (".a6", ".text6")

// document
//   .querySelector(".a1")
//   .addEventListener(
//     "mouseover",
//     () => (document.querySelector(".text1").style.display = "block")
//   );

// document
//   .querySelector(".a1")
//   .addEventListener(
//     "mouseout",
//     () => (document.querySelector(".text1").style.display = "none")
//   );



//   document
//   .querySelector(".a2")
//   .addEventListener(
//     "mouseover",
//     () => (document.querySelector(".text2").style.display = "")
//   );

// document
//   .querySelector(".a2")
//   .addEventListener(
//     "mouseout",
//     () => (document.querySelector(".text2").style.display = "none")
//   );

//   document
//   .querySelector(".a3")
//   .addEventListener(
//     "mouseover",
//     () => (document.querySelector(".text3").style.display = "")
//   );

// document
//   .querySelector(".a3")
//   .addEventListener(
//     "mouseout",
//     () => (document.querySelector(".text3").style.display = "none")
//   );



// document
//   .querySelector(".a4")
//   .addEventListener(
//     "mouseout",
//     () => (document.querySelector(".text4").style.display = "none")
//   );

// document
//   .querySelector(".a4")
//   .addEventListener(
//     "mouseover",
//     () => (document.querySelector(".text4").style.display = "")
//   );

// document
//   .querySelector(".a5")
//   .addEventListener(
//     "mouseout",
//     () => (document.querySelector(".text5").style.display = "none")
//   );

// document
//   .querySelector(".a5")
//   .addEventListener(
//     "mouseover",
//     () => (document.querySelector(".text5").style.display = "")
//   );

// document
//   .querySelector(".a6")
//   .addEventListener(
//     "mouseout",
//     () => (document.querySelector(".text6").style.display = "none")
//   );

// document
//   .querySelector(".a6")
//   .addEventListener(
//     "mouseover",
//     () => (document.querySelector(".text6").style.display = "")
//   );
