const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

//Connecting to the DB \\
connectDB();

// Middleware Init\\
app.use(express.json({ extended: false }));
app.use(bodyParser.json());

// Routes \\
app.use("/api/entrees", require("./routes/entrees"));

// Static assets if in production (deployment purposes) \\
if (process.env.NODE_ENV === "production") {
    // Set static folder \\
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendfile(path.join(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));