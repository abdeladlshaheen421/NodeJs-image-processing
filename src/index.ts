import express from 'express'
import imageRouter from './routers/imageRouter'
import * as dotenv from 'dotenv'
dotenv.config()
const app = express()

app.listen(process.env.PORT || 8080, (): void =>
  console.log(`Server is Listening on : http://localhost:${process.env.PORT}`)
)

app.use(imageRouter)

app.get(
  '/',
  (req: express.Request, res: express.Response): express.Response => {
    return res.status(200).json({ welcome: 'Welcome to root page' })
  }
)

app.use((req: express.Request, res: express.Response): express.Response => {
  return res.status(404).json({ message: 'page not found' })
})

export default app
