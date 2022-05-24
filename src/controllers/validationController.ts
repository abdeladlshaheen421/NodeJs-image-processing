import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
const imagesPath = './../../assets/images/'
const thumnailsPath = './../../assets/thumnails/'

const definedParam = (param: unknown) => (param != undefined ? true : false)

const validDimension = (param: string) =>
  !isNaN(parseInt(param)) && parseInt(param) > 0

const isImage = async (name: string) =>
  await fs.existsSync(await path.resolve(__dirname, imagesPath, `${name}.jpg`))

const isThumnail = async (name: string, width: number, height: number) =>
  await fs.existsSync(
    path.resolve(__dirname, thumnailsPath, `${name}${width}&${height}.jpg`)
  )

const createThumnail = async (name: string, width: number, height: number) => {
  await sharp(path.resolve(__dirname, imagesPath, `${name}.jpg`))
    .resize(width, height)
    .toFormat('jpg')
    .toFile(
      path.resolve(__dirname, thumnailsPath, `${name}${width}&${height}.jpg`)
    )
}

const getImage = async (name: string, width: number, height: number) => {
  console.log(__dirname)
  return await path.resolve(
    __dirname,
    thumnailsPath,
    `${name}${width}&${height}.jpg`
  )
}
export default {
  definedParam,
  getImage,
  createThumnail,
  isThumnail,
  isImage,
  validDimension,
}
