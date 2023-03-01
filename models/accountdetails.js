const mongoose = require('mongoose')

const techostodataSchema = mongoose.Schema({
    id: { type:Number },
    name: { type: String },
    username: { type: String },
    email: { type: String },
    address: {
        street: { type:String },
        suite: { tyoe:String },
        city: { type:String },
        zipcode: { type:String },
        geo: {
            lat: {type:Number},
            lng: {type:Number}
        }
    },
    phone: { type: String },
    website: { type:String }
}, { timestamp: true, versionKey: false, collection: "Techosto_data" })

module.exports = mongoose.model('Techosto_data', techostodataSchema)