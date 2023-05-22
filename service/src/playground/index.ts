import express from 'express'

const playgroundRouter = express.Router()

playgroundRouter.get('/list', function (req, res) {
    res.send('列表查询')
})

export default playgroundRouter