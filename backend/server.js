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
});

//POST Route for add new canndidate
app.post("/api/candidates", (req,res) => {
    const newCandidate = {
        id: Date.now().toString(), 
        ...req.body 
    };
    
    candidates.push(newCandidate);
    res.status(201).json(newCandidate);
});

//PUT Route for updating candidates
app.put("/api/candidates", (req,res) => {
    const candidateId = req.params.id;
    const updateData = req.body;
    const candidateIndex = candidates.findIndex(c => c.id == candidateId);

    if(candidateIndex !== -1){
        candidates[candidateIndex] = {...candidates}
    }

});


app.get("/api/test", (req,res) =>{
    res.json({message: "ZeloraTech backend run successfully!!"});
});

//DELETE Route for removing candidates

app.listen(PORT, () => {
    console.log(`Server is running On PORT number: ${PORT}`);
});