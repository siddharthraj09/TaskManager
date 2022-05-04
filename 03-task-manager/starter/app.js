const express =require('express')
const app = express()
const PORT =3000
const tasks =require('./routes/tasks')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//routes
app.get('/hello',(req,res)=>{
    res.send('Task manager')
})


app.use('/api/v1/tasks',tasks)


app.listen(PORT,() =>{
    console.log(`server is listening on ${PORT}...`)
})