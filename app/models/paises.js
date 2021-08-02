const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paisesSchema = new Schema({
    id: {
        type: Number,
        required:[true, "El ID es obligatorio"],
        unique: true,
        

    },
    nombre: {type: String},
    continente: {
        type: String,
        emun:['ASIA','EUROPA','AMERICA','AFRICA','OCEANIA'],
        default: 'AMERICA'
    },
    habitantes: {
        type: Number,
        default: 0
    }
},{
    timestamps:true,
    versionkey:false
})

module.exports = mongoose.model('paises',paisesSchema,'paises');