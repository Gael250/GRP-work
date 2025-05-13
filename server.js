const express= require('express')
const app= express()
const port= 3000
app.get('/',(req,res)=>{
    res.sendFile('/public/dashboard.html',{root: __dirname})
})
app.get('/tictactoe',(req,res)=>{
    res.sendFile('/public/tictactoe.html',{root:__dirname})
})
app.get('/simonGame',(req,res)=>{
    res.sendFile('/public/simonGame.html',{root:__dirname})
})
app.listen(port, () => {    
    console.log(`Server is running on http://localhost:${port}`)
})
