const express = require('express')
const router = express.Router()
const controller = require('./controllers/controllers')

//localhost:8080/auth/authentication
router.post('/authentication', controller.authentication)

//localhost:8080/auth/authorization
router.post('/authorization', controller.authorization)

//localhost:8080/auth/verify1
router.post('/verify1', controller.verifyToken)
 
//localhost:8080/auth/logout
router.post('/logout', controller.logout)

//localhost:8080/auth/setId
router.post('/setId', controller.setId)

//localhost:8080/auth/pass
router.post('/pass', controller.validatePassword)

//localhost:8080/auth/changeProfile
router.post('/changeProfile', controller.changeProfile)

module.exports = router 