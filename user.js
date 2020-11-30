const express = require('express');
const router = express.Router();
const verify = require('./verify')
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {

  // 아이디, 비밀번호
  const {
    id, pw
  } = req.body

  // jwt 발행
  const token = jwt.sign({ userId : id },
    'secretKey',
    { expiresIn : '1d'})

  res.json({
    message : 'hello',
    token : token
  })
})


router.post('/login', verify, (req, res) => {
  res.json({
    message : req.user
  })

})


module.exports = router;