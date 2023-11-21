from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Dummy user data (replace with a database in a real application)
users = {
    'john': {'password': 'password123', 'fingerprint_template': '1234567890abcdef'},
    'jane': {'password': 'securepass', 'fingerprint_template': '0987654321abcdef'},
}

@app.route('/')
def index():
    return render_template('password.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    if username in users and password == users[username]['password']:
        return redirect(url_for('fingerprint_login', username=username))
    else:
        return render_template('index.html', error='Invalid username or password')

@app.route('/fingerprint_login/<username>')
def fingerprint_login(username):
    return render_template('fingerprint_login.html', username=username)

if __name__ == '__main__':
    app.run(debug=True)