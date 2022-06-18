const express= require('express')
const app = express()
const PORT=8000

const barcaPlayers={
    'puig':{
    'name': 'Ricard Marti Puig',
    'age':22,
    'nationality': 'Spain'
},
    'pedri':{
    'name': 'Pedri Gonzalez',
    'age':19,
    'nationality': 'Spain'
},
    'depay':{
    'name': 'Memphis Depay',
    'age':28,
    'nationality': 'Netherlands'
},
    'null':{
    'name': undefined,
    'age':undefined,
    'nationality': undefined
}
}

app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/api',(request,response)=>{
    response.json(barcaPlayers)

})
// app.get('/',(request,response)=>{
//     response.sendFile(__dirname + '/js/main.js')
// })
app.get('/api/:playerName',(request,response)=>{
    const player=request.params.playerName.toLowerCase()
    // response.json(barcaPlayers)
    if (barcaPlayers[player]){
        response.json(barcaPlayers[player])
    }else{
        response.json(barcaPlayers['null'])
    }
})
app.listen(PORT,()=>{
    console.log(`the server is running on port ${PORT}, you better go catch it`)
})