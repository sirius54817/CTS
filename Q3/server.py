from flask import Flask, request
import hashlib
import time

app = Flask(__name__)
secret = "hidden_value"  # In a real scenario, this would be truly hidden

@app.route('/api/verify', methods=['POST'])
def verify():
    timestamp = str(int(time.time()))
    client_hash = request.headers.get('X-Request-Hash')
    user_agent = request.headers.get('User-Agent', '')
    
    server_hash = hashlib.md5((user_agent + timestamp + secret).encode()).hexdigest()
    
    if client_hash == server_hash:
        return {"flag": "FLAG{REDACTED}"}
    return {"error": "Invalid hash"}, 403

if __name__ == '__main__':
    app.run(debug=True, port=5000) 