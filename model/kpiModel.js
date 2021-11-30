const mongoose = require('mongoose')

const kpiSchema = new mongoose.Schema({
    name:{
        type        : String, 
        trim        : true,
        required: [true, 'What is your contact number?']
    },
    lastName:{
        type        : String, 
        required    : [true,'El campo lastName es obligatorio'],
        trim        : true
    },
    age:{
        type    : Number,
        min     : [18,'la edad debe ser mayor a 18'],
        max     : [99,'la edad debe ser menor a 99']
    },
    bornDate:{
        type    : Date
    },
    totaldocs     : Number
},
{
    toJSON  : { virtuals: true},
    toObject: { virtuals: true }
}
)


const KPIClient = mongoose.model('KPIClient',kpiSchema)


module.exports = KPIClient