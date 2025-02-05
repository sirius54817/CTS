from flask import Flask, render_template, jsonify, request
import secrets

app = Flask(__name__)

# The flag that participants need to capture
FLAG = "CYBERNRDS{l0c4l_st0r4g3_1s_n0t_s4f3}"

# Admin credentials (normally these would be in a secure database)
ADMIN_CREDENTIALS = {
    "username": "admin",
    "password": secrets.token_hex(16)  # Random password each time server starts
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/api/check_auth', methods=['POST'])
def check_auth():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid request"}), 400
    
    username = data.get('username')
    password = data.get('password')
    
    # This is intentionally vulnerable - participants need to bypass this
    if username == ADMIN_CREDENTIALS['username'] and password == ADMIN_CREDENTIALS['password']:
        return jsonify({"success": True, "token": "admin_token_" + secrets.token_hex(8)})
    return jsonify({"success": False, "error": "Invalid credentials"}), 401

@app.route('/api/get_flag', methods=['POST'])
def get_flag():
    data = request.get_json()
    if not data or 'token' not in data:
        return jsonify({"error": "No token provided"}), 401
    
    # Vulnerable check - participants can manipulate localStorage to bypass this
    if data['token'].startswith('admin_token_'):
        return jsonify({"flag": FLAG})
    return jsonify({"error": "Invalid token"}), 401

if __name__ == '__main__':
    app.run(debug=True) 