const express = require('express');

const app = express() ;
const PORT = 3000;

function processData (data) {
    return data;
}

app.get('/', (req, res)=>{
    res.status(200);
    let process =  [1, 2, 3, 4, 5, 6]//"testing :: ";
    let data = processData(process);
    res.send(data);
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);