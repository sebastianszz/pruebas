const express = require('express');
const path = require('path')

//HTML
const indexHtml = path.join(__dirname, '/views/index.html')
const babbageHtml = path.join(__dirname, '/views/babbage.html')
const bernersleeHtml = path.join(__dirname, '/views/berners-lee.html')
const clarkeHtml = path.join(__dirname, '/views/clarke.html')
const hamiltonHtml = path.join(__dirname, '/views/hamilton.html')
const hopperHtml = path.join(__dirname, '/views/hopper.html')
const lovelaceHtml = path.join(__dirname, '/views/lovelace.html')
const turingHtml = path.join(__dirname, '/views/turing.html')
//APP
const app = express()

app.listen(3030);

app.get('/', (req,res) => {
    res.sendFile(indexHtml)
})
app.get('/babbage', (req,res) =>{
    res.sendFile(babbageHtml)
})
app.get('/berners-lee', (req,res) =>{
    res.sendFile(bernersleeHtml)
})
app.get('/clarke', (req,res) =>{
    res.sendFile(clarkeHtml)
})
app.get('/hamilton', (req,res) =>{
    res.sendFile(hamiltonHtml)
})
app.get('/hopper', (req,res) =>{
    res.sendFile(hopperHtml)
})
app.get('/lovelace', (req,res) =>{
    res.sendFile(lovelaceHtml)
})
app.get('/turing', (req,res) =>{
    res.sendFile(turingHtml)
})

app.use(express.static('public/'));