import express from 'express';
import {
    alluserslist,
    registernewuser,
    updateUser,
    deleteUser
} from '../controller/user.controller.js'
const router = express.Router();

 router.post('/create-new-user',registernewuser)

 router.get('/get-all-user',alluserslist)

 router.put('/update-user',updateUser)

 router.delete('/delete-user',deleteUser)

export default router;
