document.addEventListener('DOMContentLoaded', function() {
  // Your JavaScript code here
// Get all image containers
var imageContainers = document.querySelectorAll('.img-container');

// Loop through each image container
imageContainers.forEach(function (container) {
  // Get the image element within the container
  var image = container.querySelector('img');

  // Set the height of the container to match the height of the image
  console.log(image.clientHeight)
  container.style.height = image.clientHeight + 'px';
});


const navbar = document.querySelector('.navbar');
const gototop = document.querySelector('.go-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 80) {
    gototop.style.bottom = '0';
  } else {
    gototop.style.bottom = '-90px';
  }
});


// const loginbtn = document.querySelector('#sign-in');
// const signupbtn = document.querySelector('#sign-up');
const loginform = document.querySelector('#login-form');
const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
// const closelogin = document.querySelector('#closelogin');
// const closesignup = document.querySelector('#closesignup');
const signupform = document.querySelector('#signupform');

function login(){
  loginform.style.display = 'flex';
  signupform.style.display = 'none';
  document.body.classList.add("no-scroll");
}

function signup(){
  signupform.style.display = 'flex';
  loginform.style.display = 'none';
  document.body.classList.add("no-scroll");
}

function closesignup(){
  signupform.style.display = 'none';
  document.body.classList.remove("no-scroll");
}

function closelogin(){
  loginform.style.display = 'none';
  document.body.classList.remove("no-scroll");
}


});
