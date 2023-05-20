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

/*------- search button ----------- */

// Selecting the search form element
searchform = document.querySelector('.search-form');

// Adding click event listener to the search button
document.querySelector('#search-btn').onclick = () =>{
    // Toggling the 'active' class of the search form to show/hide it
    searchform.classList.toggle('active');
}

// Adding scroll event listener to the window
window.onscroll = () =>{
    // Removing the 'active' class from the search form to hide it when scrolling
    searchform.classList.remove('active');
    // Checking the scroll position
    if(window.scrollY > 80){
         // Adding the 'active' class to the header section with class 'header-2'
        document.querySelector('.header .header-2').classList.add('active');
      // Removing the 'active' class from the header section with class 'header-2'
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
// Adding onload event listener to the window
window.onload = () =>{
    // Checking the initial scroll position
    if(window.scrollY > 80){
        // Adding the 'active' class to the header section with class 'header-2'
        document.querySelector('.header .header-2').classList.add('active');
    // Removing the 'active' class from the header section with class 'header-2'
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
 
}