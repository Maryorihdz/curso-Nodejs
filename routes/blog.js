import express from 'express'
import controller, { renderNewPost } from '../controllers/blog.js'
import bodyParser from  'body-parser'

const router = express.Router()

router.use(bodyParser.urlencoded({extended: true}));
router.get('/', controller.renderBlog); //definimos primer metodo get
router.post('/new-Post', controller.newPost)
router.get('/new-Post', controller.renderNewPost)

export default  router

