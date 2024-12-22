import express from  'express'
import {registeruser , loginUser, userCredits} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register',registeruser);
userRouter.post('/login',loginUser);
userRouter.get('/credits',userAuth,userCredits);


export default userRouter

