import supertest, { SuperTest, Test, Response } from 'supertest'
import app from './../index'
import path from 'path'
import { promises as fsPromises } from 'fs'
const request: SuperTest<Test> = supertest(app)
describe('test image processing endpoint ', (): void => {
  describe('test endpoint : http://localhost:3000', (): void => {
    it('gets /', async (): Promise<void> => {
      const response: Response = await request.get('/')
      expect(response.status).toBe(200)
    })
  })

  describe('test notfound endpoint : http://localhost:3000/imago', (): void => {
    it('gets /imago', async (): Promise<void> => {
      const response: Response = await request.get('/imago')
      expect(response.status).toBe(404)
    })
  })

  describe('test images endpoint : http://localhost:3000/images', (): void => {
    it('gets /images', async (): Promise<void> => {
      const response: Response = await request.get('/images')
      expect(response.status).toBe(200)
    })
  })

  describe('test images endpoint : http://localhost:3000/images?name=', (): void => {
    it('gets /images?name', async (): Promise<void> => {
      const response: Response = await request.get('/images?name=')
      expect(response.status).toBe(301)
    })
  })

  describe('test images endpoint : http://localhost:3000/images?name=wonder&width=ah&height=-100', (): void => {
    it('gets /images?name=wonder&width=ah&height=-100', async (): Promise<void> => {
      const response: Response = await request.get(
        '/images?name=wonder&width=ah&height=-100'
      )
      expect(response.status).toBe(301)
    })
  })

  describe('test images endpoint : http://localhost:3000/images?name=wonder3&width=250&height=250', (): void => {
    it('gets /images?name=wonder3&width=250&height=250', async (): Promise<void> => {
      const response: Response = await request.get(
        '/images?name=wonder1&width=250&height=250'
      )
      expect(response.status).toBe(201)
    })

    it('gets /images?name=wonder3&width=250&height=250', async (): Promise<void> => {
      const response: Response = await request.get(
        '/images?name=wonder1&width=250&height=250'
      )
      expect(response.status).toBe(200)
    })
  })
})

afterAll(async (): Promise<void> => {
  const resizedImagePath = path.resolve(
    path.resolve(__dirname, '../../assets/thumnails'),
    'wonder1250&250.jpg'
  )

  try {
    await fsPromises.access(resizedImagePath)
    fsPromises.unlink(resizedImagePath)
  } catch (err) {
    console.log(`error : ${err}`)
  }
})
