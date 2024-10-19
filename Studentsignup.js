document.getElementById('Signup').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting to the server

    // Get values from form inputs
    var username = document.getElementById('name').value;
    var redgno = document.getElementById('reg_no').value;
    var email = document.getElementById('email').value;
    var branch = document.getElementById('branch').value;
    var year = document.getElementById('year').value;

    // Store login data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('redgno', redgno);  // You might want to avoid storing plain text passwords
    localStorage.setItem('email', email);  // You might want to avoid storing plain text passwords
    localStorage.setItem('branch', branch);  // You might want to avoid storing plain text passwords
    localStorage.setItem('year', year);  // You might want to avoid storing plain text passwords

    // Confirm that the data has been stored
    alert('Login data saved in localstorage');

    // Optionally, you could clear the form after saving the data
    document.getElementById('Signup').reset();
});

document.getElementById("loginBtn").addEventListener("click", function() {
    window.location.href = "Studentlogin.html"; // Redirect to login page
});