const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./routes/graphql');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Serve static frontend files
app.use(express.static('../frontend'));

// GraphQL endpoint (new, secure API)
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

// Legacy REST API (vulnerable endpoint)
app.use('/api/v1', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 