const pasienModel = require('../model/Pasien')
const objectId = require('mongoose').Types.ObjectId

exports.simpanPasien = (data) =>
  new Promise((resolve, reject) => {
    pasienModel.create(data)
    .then(() => {
        resolve({
            sukses: true,
            pesan: 'Berhasil Input Pasien'
        })
    }).catch(() => {
        reject({
            sukses: false,
            pesan: 'Gagal Input Pasien'
        })
    })  
}) 

exports.getPasien = () =>
  new Promise((resolve, reject) => {
      pasienModel.find()
       .then(data => {
         resolve({
             sukses: true,
             pesan: 'Berhasil Memuat Data',
             data: data
         })
       }).catch(() => {
           reject({
               sukses: false,
               pesan: 'Gagal Memuat Data',
               data: []
           })
       })
  })

  exports.edit = (data, id) =>
    new Promise((resolve, reject) => {
      pasienModel.updateOne({
        _id: objectId(id)
      }, data).then(() => {
          resolve({
              sukses: true,
              pesan: 'Berhasil Mengubah Data Pasien'
            })
          }).catch(() => {
              reject({
                  sukses: false,
                  pesan: 'Gagal Mengubah data Pasien'
              })
          })
      })

      exports.tampilkanSatuData = (id) => 
        new Promise((resolve, reject) => {
            pasienModel.findOne({
                _id: objectId(id)     
            }).then((data) => {
                resolve(data)
            }).catch(() => reject({
                sukses: false,
                pesan: 'Gagal Memuat Data'
            }))
        })

        exports.delete = (id) =>
          new Promise((resolve, reject) => {
              pasienModel.deleteOne({
                  _id: objectId(id)
              }).then(() => {
                  resolve({
                      sukses: true,
                      pesan: 'Berhasil Menghapus Data Pasien'
                  })
              }).catch(() => {
                  reject({
                      sukses: false,
                      pesan: 'Gagal Menghapus data Pasien'
                  })
              })
          })