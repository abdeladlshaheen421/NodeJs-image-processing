import validation from './validationController'
import express from 'express'
const createThumbnail = async (
  req: express.Request,
  res: express.Response
): Promise<unknown> => {
  if (!validation.definedParam(req.query.name)) {
    return res.status(200).json({ Fail: 'Image name is not defined' })
  }
  if (!validation.definedParam(req.query.width)) {
    return res.status(301).json({ Fail: 'Image width is not defined' })
  }
  if (!validation.definedParam(req.query.height)) {
    return res.status(301).json({ Fail: 'Image height is not defined' })
  }
  if (!validation.validDimension(<string>req.query.width)) {
    return res
      .status(301)
      .json({ Fail: 'Image width is not Valid , please enter valid width' })
  }
  if (!validation.validDimension(<string>req.query.height)) {
    return res
      .status(301)
      .json({ Fail: 'Image height is not Valid , please enter valid height' })
  }
  if (!validation.isImage(<string>req.query.name)) {
    return res.status(301).json({ Fail: 'Image is Not Found' })
  }
  if (
    await validation.isThumnail(
      <string>req.query.name,
      Number(req.query.width),
      Number(req.query.height)
    )
  ) {
    return await res
      .status(200)
      .sendFile(
        await validation.getImage(
          <string>req.query.name,
          Number(req.query.width),
          Number(req.query.height)
        )
      )
  }
  try {
    await validation.createThumnail(
      <string>req.query.name,
      Number(req.query.width),
      Number(req.query.height)
    )
    return await res
      .status(201)
      .sendFile(
        await validation.getImage(
          <string>req.query.name,
          Number(req.query.width),
          Number(req.query.height)
        )
      )
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'error with image processing' })
  }
}

export default createThumbnail
