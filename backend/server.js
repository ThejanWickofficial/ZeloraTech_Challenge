const express = require("express");
const cors = require("cors");

let { candidates } = require("./data");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

//GET Route for fletch all candidates
app.get("/api/candidates", (req,res) =>{
    const stageQuery = req.query.stage;
    
    if (stageQuery) {
        const filteredCandidates = candidates.filter(c => c.stage === stageQuery);
        return res.json(filteredCandidates);
    }
    
    res.json(candidates);
    //res.json({message: "ZeloraTech backend run successfully!!"});
});

app.listen(PORT, () => {
    console.log(`Server is running On PORT number: ${PORT}`);
});