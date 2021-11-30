const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const cors = require('cors') 
const mongoose = require('mongoose');
const { postKPI, getKPI } = require('./controller/controller');


const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.enable('trust proxy');
app.use(cors());
app.options('*', cors());



//generate conenction to DB
const DB = "mongodb+srv://kerwin:1234567890@cluster0.puilz.mongodb.net/super-api?retryWrites=true&w=majority"
try {
    mongoose.connect(DB)
        .then(() => {
            console.log('DB connected 🚀')
        })
} catch (error) {
    console.log(error)
}



app.post('/api/kpi', postKPI)

app.get('/api/kpi', getKPI)



app.listen(process.env.PORT || 3080,()=>{
    console.log(`app listening on port ${process.env.PORT}`)
})


