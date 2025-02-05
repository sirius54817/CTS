// Vulnerable authentication implementation
async function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('/api/check_auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Store authentication token in localStorage (vulnerable by design)
            localStorage.setItem('auth_token', data.token);
            window.location.href = '/admin';
        } else {
            showMessage('Invalid credentials', 'error');
        }
    } catch (error) {
        showMessage('Authentication failed', 'error');
    }
}

async function getFlag() {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
        showFlagMessage('Not authenticated', 'error');
        return;
    }
    
    try {
        const response = await fetch('/api/get_flag', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });
        
        const data = await response.json();
        
        if (data.flag) {
            showFlagMessage(data.flag, 'success');
        } else {
            showFlagMessage('Failed to get flag', 'error');
        }
    } catch (error) {
        showFlagMessage('Error retrieving flag', 'error');
    }
}

function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type;
}

function showFlagMessage(message, type) {
    const messageDiv = document.getElementById('flag-message');
    messageDiv.textContent = message;
    messageDiv.className = type;
}

// Check authentication on admin page load
if (window.location.pathname === '/admin') {
    if (!localStorage.getItem('auth_token')) {
        window.location.href = '/login';
    }
} 