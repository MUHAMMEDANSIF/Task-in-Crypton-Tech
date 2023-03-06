import express from 'express'
import { addnewcourse , allcourse} from '../controllers/course.controller.js'

const router = express.Router()

    router.post('/add-new-course',addnewcourse);

    router.get('/all-course',allcourse);

export default router;
