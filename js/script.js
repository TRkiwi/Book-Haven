/*----- login form -------- */

var loginForm = document.querySelector('.login-form-container'); // Select the login form container element

// Add event listener to the login button with ID "login-btn"
document.querySelector("#login-btn").onclick = () =>{
     // Toggle the "active" class on the login form container element
    loginForm.classList.toggle("active");
}
// Add event listener to the close button with ID "close-login-btn"
document.querySelector("#close-login-btn").onclick = () =>{

     // Removes the "active" class from the login form container element
    loginForm.classList.remove("active");
}