import express from 'express'
import controller from '../controllers/blog.js'
import bodyParser from  'body-parser'

const router = express.Router()
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', controller.renderBlog); //definimos primer metodo get
router.post('/', controller.post)
export default  router

