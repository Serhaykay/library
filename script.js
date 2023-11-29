function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform authentication logic here (e.g., send credentials to the server)
    
    // If authentication is successful, show fingerprint section
    document.getElementById('fingerprint-section').style.display = 'block';
}

const authenticateBtn = document.getElementById('authenticateBtn');

authenticateBtn.addEventListener('click', () => {
    // Check if the browser supports the Web Authentication API
    if (window.PublicKeyCredential) {
        // Request fingerprint authentication
        navigator.credentials.create({
            publicKey: {
                // You can customize these parameters
                challenge: new Uint8Array([/* your challenge here */]),
                userVerification: 'required',
                authenticatorSelection: {
                    userVerification: 'required',
                    requireResidentKey: false,
                },
                rp: {
                    name: 'Your App Name',
                },
                user: {
                    id: new Uint8Array([/* your user ID here */]),
                    name: 'user@example.com',
                    displayName: 'User',
                },
                pubKeyCredParams: [
                    { alg: -7, type: 'public-key' },
                ],
            },
        }).then((credential) => {
            // The user has been successfully authenticated
            console.log('Fingerprint authentication success:', credential);
        }).catch((error) => {
            // Handle authentication failure
            console.error('Fingerprint authentication error:', error);
        });
    } else {
        console.error('Web Authentication API not supported in this browser.');
    }
});
