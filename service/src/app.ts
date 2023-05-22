import express from 'express'
import demoRouter from './demo/index'
import playgroundRouter from './playground/index'

const app = express()


app.all('*', (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'authorization, Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

app.use('/demo', demoRouter)
app.use('/playground', playgroundRouter)

app.listen(3003, () => globalThis.console.log('Server is running on port 3003'))