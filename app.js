const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")
const close = document.querySelector("#close")

hamburger.addEventListener("click", ()=>{
  menu.classList.remove("hidden")
  hamburger.classList.add("hidden")
  close.classList.remove('hidden')
  close.classList.add('flex')
})

close.addEventListener('click', () => {
    menu.classList.add('hidden')
    close.classList.add('hidden')
    hamburger.classList.remove('hidden')
})

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

moon.addEventListener("click", ()=>{
  body.classList.toggle("dark")
})