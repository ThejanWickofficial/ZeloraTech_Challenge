const express = require("express");
const cors = require("cors");

let { candidates } = require("./data");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.get("/api/test", (req,res) =>{
    res.json({message: "ZeloraTech backend run successfully!!"});
});

app.listen(PORT, () => {
    console.log(`Server is running On PORT number: ${PORT}`);
});