// index.js

const express = require("express")

// Make Express instance
const app = express()
const PORT = process.env.PORT || 3000

// initializing a basic API that returns the "Hello, World!" message
app.get("/", (req, res) => { res.json("Hello, World!") })

// running the server
app.listen(PORT, () => { console.log(`Starting Express server on http://localhost:${PORT}`) })