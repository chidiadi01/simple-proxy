const express = require('express');
const app = express();
const cors = require("cors");


const PORT = 5000;

//So, in real life, I don't think people will be routing to the backend. I think the backend will just
// serve the API endpoints that the frontend will consume. So, I just provided HTML so that you can do both.

app.use(cors());

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to the Chat Service</h1>
        <p>This page is served directly from the chat container.</p>
        <a href="/">⬅ Back to Home</a>
        <br />
        <a href="/auth">➡ Go to Auth Service</a>`);
});

app.listen(PORT, () => console.log(`Chat service running on port ${PORT}`));
