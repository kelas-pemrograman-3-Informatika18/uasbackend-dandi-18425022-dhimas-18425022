const router = require('express').Router()
const pasienController = require('../controller/Pasien')

router.post('/input', (req, res) => {
    pasienController.simpanPasien(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.json(err))
})

router.get('/get', (req, res) => {
    pasienController.getPasien()
       .then((result) => res.json(result))
       .catch((err) => res.json(err))
})

router.put('/edit/:id', (req, res) => {
    pasienController.edit(req.body, req.params.id)
       .then(result => res.json(result))
       .catch(err => res.json(err))
})

router.get('/tampilsingle/:id', (req, res) => {
    pasienController.tampilkanSatuData(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) => {
    pasienController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router