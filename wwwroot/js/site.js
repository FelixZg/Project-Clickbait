// Modal Elements
// Main Searchbar
var mainSearchbar = document.getElementById("main-searchbar");
// Get modal elements
var modal = document.getElementById("simpleModal");
// Get open modal button
// Login
var modalLoginBtn = document.getElementById("modalLoginBtn");
// Register
var modalRegisterBtn = document.getElementById("modalRegisterBtn");
// Get close modal button
var closeBtn = document.getElementById("closeBtn");

// Sign in/up form Elements
var signUpButton = document.getElementById("signUp");
var signInButton = document.getElementById("signIn");
var container = document.getElementById("container");

// Show sign up info
signUpButton.addEventListener("click", openRegisterModal);

// Show sign in info
signInButton.addEventListener("click", openLoginModal);

// Listen for click to open modal
modalLoginBtn.addEventListener("click", openLoginModal);
modalRegisterBtn.addEventListener("click", openRegisterModal);

// Listen for click close to close modal
closeBtn.addEventListener("click", closeModal);

// Listen for outside click
window.addEventListener("click", clickOutside);

// Function to open modal
function openLoginModal() {
    closeBtn.style.color = "white";
    modal.style.display = "block";
    container.classList.remove("right-panel-active");
}
function openRegisterModal() {
    closeBtn.style.color = "#d81942";
    modal.style.display = "block";
    container.classList.add("right-panel-active");
}

// Function to close modal
function closeModal() {
    modal.style.display = "none";
}

// Function to check if clicked outside modal
function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

