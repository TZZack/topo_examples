import express from 'express'

const demoRouter = express.Router()

demoRouter.get('/list', function (req, res) {
    res.send('列表查询')
})

export default demoRouter