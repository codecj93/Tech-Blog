const router = require('express').Router();
const apiRoutes = require('./api')
const renderRoutes = require('./renderRoutes')

//endpoints http://localhost:3001/api
router.use('/api',apiRoutes)
router.use('/', renderRoutes)

module.exports = router;