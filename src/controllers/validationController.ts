import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
const imagesPath = './../../assets/images/'
const thumnailsPath = './../../assets/thumnails/'

const definedParam = (param: unknown): boolean =>
  param != undefined ? true : false

const validDimension = (param: string): boolean =>
  !isNaN(parseInt(param)) && parseInt(param) > 0

const isImage = async (name: string): Promise<boolean> =>
  await fs.existsSync(await path.resolve(__dirname, imagesPath, `${name}.jpg`))

const isThumnail = async (
  name: string,
  width: number,
  height: number
): Promise<boolean> =>
  await fs.existsSync(
    path.resolve(__dirname, thumnailsPath, `${name}${width}&${height}.jpg`)
  )

const createThumnail = async (
  name: string,
  width: number,
  height: number
): Promise<void> => {
  await sharp(path.resolve(__dirname, imagesPath, `${name}.jpg`))
    .resize(width, height)
    .toFormat('jpg')
    .toFile(
      path.resolve(__dirname, thumnailsPath, `${name}${width}&${height}.jpg`)
    )
}

const getImage = async (
  name: string,
  width: number,
  height: number
): Promise<string> => {
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
