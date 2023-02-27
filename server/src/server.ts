import express from 'express'

const app = express()

app.get('/users',()=>{
    console.log('Acessou');
    
})
app.listen(3333)



