function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform authentication logic here (e.g., send credentials to the server)
    
    // If authentication is successful, show fingerprint section
    document.getElementById('fingerprint-section').style.display = 'block';
}