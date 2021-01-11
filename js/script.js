function changeImage(name) {
  // Muda a imagem quando clica
  const src = `img/${name}.jpeg`;
  const image = document.getElementById('big-image');
  image.src = src;

  // Tirar a borda dos outros items
  const item = document.getElementsByClassName('selected')[0];
  item.classList.remove('selected');

  // Muda a borda quando clica
  const clicked = document.getElementById(`item-${name}`);
  clicked.classList.add('selected');
}