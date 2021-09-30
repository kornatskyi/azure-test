const express = require('express')

const app = express();

app.get("/", (req, res) => {
    console.log("Get request!");
    res.status(200).send(
        "Hello Azure!"
    )

})

app.post("/", (req, res) => {
    console.log("Post request!");
    res.status(200).send({
        data: "Data from Azure hosted server!!!"
    })
})

const port = 8080
app.listen(port, () => {
    console.log("Application in running on " + port);

})