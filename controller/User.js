const userModel = require('../model/User')
const bcrypt = require('bcrypt')

exports.register = (data) =>
   new Promise((resolve, reject) => {
      userModel.findOne({
        username: data.username
      }).then(user => {
        if (user) {
           reject({
            sukses: false,
            pesan: 'Username Sudah terdaftar'
          })
        } else {
         bcrypt.hash(data.password, 10, (err, hash) => {
            data.password = hash
            userModel.create(data)
               .then(() => {
                 resolve({
                   sukses: true,
                   pesan: 'Berhasil Registrasi'
                 })
               }).catch(() => {
                 reject({
                 sukses: false,
                 pesan: 'Gagal Registrasi'
               })
             })
          })
        }
      })
   })
    exports.login = (data) => 
       new Promise((resolve, reject) => {
          userModel.findOne({
            username: data.username
          }).then((user) => {
             if (user) {
               if (bcrypt.compareSync(data.password, user.password)){
                  resolve({
                    sukses: true,
                    pesan: 'Berhasil login',
                    data: user
                 })
               } else {
                  reject({
                     sukses:false,
                     pesan: 'Password Salah'
                  })
               }
             }else{
                reject({
                   sukses:false,
                   pesan: 'username tidak terdaftar'
                })
             }
          })

       })