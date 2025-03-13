require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const schoolRoutes = require("./routes/schoolRoutes");

app.use(cors());
app.use(express.json());
app.use("/api", schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
