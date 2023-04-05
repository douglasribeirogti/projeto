function toggleMode() {
  //pegando o html
  const html = document.documentElement

  //trocando as classes
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, substituir a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  // se tiver sem light mode, manter a imagem normal
}
