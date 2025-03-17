function togglemode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  html.classList.toggle('light')
  const img = document.querySelector('#profile img')
  if (html.classList.contains('light'))
  {
    img.setAttribute("src", "./ imagem 1.jpg")
  }
  else{img.setAttribute("src", "./nova img 2.jpg")}
}
