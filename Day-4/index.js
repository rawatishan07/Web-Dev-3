const express = require('express');
const app = express();
const packages = require("./Tour");

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.get("/packages", (req, res) => {
    const des = res.query.dstination;
    if(!des){
        res.json(packages);
    }
    const result = packages.filter(item => item.destination == des);
    res.json(result);
})

app.get("/packages/:id", (req, res) => {
    const id = Number(req.params.id)
    const onePack = packages.find((item)=>{item.id == id})
    res.json(onePack);
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})