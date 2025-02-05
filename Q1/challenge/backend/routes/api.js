const express = require('express');
const router = express.Router();
const users = require('../data/users');

// Vulnerable REST endpoint - no authentication required
router.get('/users', (req, res) => {
    res.json(users.getAllUsers());
});

// Hidden admin endpoint with sensitive data
router.get('/admin/users.bak', (req, res) => {
    // This endpoint contains the flag and sensitive data
    const sensitiveData = {
        users: users.getAllUsers(),
        flag: 'CYBERNRDS{0ld_AP1s_N3v3r_D13}',
        adminCredentials: {
            username: 'admin',
            password: 'supersecret123'
        }
    };
    res.json(sensitiveData);
});

module.exports = router; 