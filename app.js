const express = require('express'); 
const app = express(); 

app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT = 3000; 

// ROUTES
app.get('/', (req, res) => {
    res.render("home")
})

// ROUTES
app.get('/listings', (req, res) => {
    res.render("listings")
})
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running,and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 