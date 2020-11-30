const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {

  // 아이디, 비밀번호 수집
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

router.post('/login', (req, res) => {
  const {
    token
  } = req.body

  try {
    const decoded = jwt.verify(token, 'secretKey')
    console.log(decoded)

    res.json({
      message : decoded
    })

  } catch (e) {
    res.json({
      message : e.message
    })
  }
})


module.exports = router;