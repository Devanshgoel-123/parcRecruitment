const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click",() => {
    
    hamburger.classList.toggle("active");
    document.getElementById("clickColumn").classList.toggle("clicked")
  })