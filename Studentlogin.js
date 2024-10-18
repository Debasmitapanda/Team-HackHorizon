document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting to the server

    // Get values from login form inputs
    var username = document.getElementById('name').value;
    var redgno = document.getElementById('reg_no').value;
    var email = document.getElementById('email').value;

    // Retrieve the stored data from localStorage
    var storedUsername = localStorage.getItem('username');
    var storedRedgno = localStorage.getItem('redgno');
    var storedEmail = localStorage.getItem('email');

    // Check if the input matches the stored data
    if (username == storedUsername && redgno == storedRedgno && storedEmail==email ) {
        alert('Login successful click the ok button for further services');
        let a = document.createElement("a");
        a.href = "Faculty.html";
        a.target = "_blank";
        document.body.append(a);
        a.click();
    } else {
        alert('Invalid username or password or email!');
    }

    // Optionally, clear the login form
    document.getElementById('loginForm').reset();
});