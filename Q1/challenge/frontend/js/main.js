async function fetchUsers() {
    try {
        // Using the secure GraphQL API
        const query = `
            query {
                users {
                    id
                    username
                    email
                    role
                }
            }
        `;

        const response = await fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query })
        });

        const data = await response.json();
        displayUsers(data.data.users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = users.map(user => `
        <div class="user-card">
            <h3>${user.username}</h3>
            <p>Email: ${user.email}</p>
            <p>Role: ${user.role}</p>
        </div>
    `).join('');
}

// Load users when the page loads
document.addEventListener('DOMContentLoaded', fetchUsers); 