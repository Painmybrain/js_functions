const image = document.getElementById('img_elem');
console.log(image);

function previousImg() {
  image.src = './assets/img/img1.jpg';
}

function nextImg() {
  image.src = './assets/img/img3.jpg';
}
