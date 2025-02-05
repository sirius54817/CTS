const users = [
    {
        id: 1,
        username: "admin",
        email: "admin@company.com",
        role: "admin",
        password: "supersecret123"
    },
    {
        id: 2,
        username: "john_doe",
        email: "john@company.com",
        role: "user",
        password: "password123"
    }
];

module.exports = {
    getAllUsers: () => users,
    getPublicUsers: () => users.map(({ id, username, email, role }) => ({
        id,
        username,
        email,
        role
    })),
    getPublicUserById: (id) => {
        const user = users.find(u => u.id === parseInt(id));
        if (!user) return null;
        const { password, ...publicUser } = user;
        return publicUser;
    }
}; 