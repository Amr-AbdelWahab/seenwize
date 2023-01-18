let ham = document.getElementById('ham');
let navUl = document.getElementById('navUl');

ham.addEventListener('click', function() {
  this.classList.toggle('selected');
  navUl.classList.toggle('active');
})