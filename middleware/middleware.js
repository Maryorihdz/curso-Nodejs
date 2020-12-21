export const parseBody = (req, res, next) => {
  let datos = ''
  req.on('data', pedazoDeDato => {
   datos += pedazoDeDato

  })
  req.on('end', () => {
    req.body = datos
    next()
  })
  
}