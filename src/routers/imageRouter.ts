import express from 'express'
const imageRouter: express.Router = express.Router()
import imagesController from './../controllers/imagesController'
imageRouter
  .route('/images')
  .get((req: express.Request, res: express.Response) =>
    imagesController(req, res)
  )
export default imageRouter
