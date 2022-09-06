const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const routeUrl = require("./routes/routes");
mongoose.connect("mongodb+srv://react:react@cluster0.evstt.mongodb.net/myTable?retryWrites=true&w=majority", () => {
  console.log("connected");
});
app.use(express.json());
app.use(cors());
app.use("/api", routeUrl);
app.listen(4000, () => {
  
  console.log("server is running on 4000");
});

db.collectionName.insert(
  {item:"itemName", qty: 1}
)