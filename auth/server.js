const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");



app.use(cors());

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to the Auth Service</h1>
        <p>This page is served directly from the auth container.</p>
        <a href="/">⬅ Back to Home</a>
        <br />
        <a href="/chat">➡ Go to Chat Service</a>`);
});

app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));
