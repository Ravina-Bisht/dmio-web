const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DMIO Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const connectDB = require("./config/db");

connectDB();

const leadRoutes = require("./routes/leadRoutes");

app.use(express.json());

app.use("/api/leads", leadRoutes);