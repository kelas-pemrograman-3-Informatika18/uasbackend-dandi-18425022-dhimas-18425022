const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PasienSchema = new Schema({
 nama: {
     type: String
 },
 umur: {
     type: String
 },
 jeniskelamin: {
     type: String
 },
 ttl: {
     type: String
 },
 alamat: {
     type: String
 },
 penyakit: {
     type: String
 }
})

module.exports = mongoose.model('pasien', PasienSchema)