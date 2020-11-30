const jwt = require('jsonwebtoken')

const verify = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, 'secretKey')
      req.user = decoded
      next()
    } catch (e) {
      return res.status(400).json({
        message : e.message
      })
    }
}


module.exports = verify