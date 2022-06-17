function myFunction(divID) {
  let x = document.getElementById(divID);
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}