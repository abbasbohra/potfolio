require("dotenv").config();
const express = require("express");
const path = require("path");
const contactHandler = require("./api/contact");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json({ limit: "10kb" }));

app.post("/api/contact", contactHandler);

app.use(express.static(path.join(__dirname, "build")));
app.get("*", (_req, res) => res.sendFile(path.join(__dirname, "build", "index.html")));
app.listen(port, () => console.log(`Portfolio server listening on port ${port}`));
