
import express from 'express';
const userRouter = express.Router()

import {
    findUser,
    createUser,
    deleteUser
} from '../controllers/user-controller';

userRouter
.get('/:id', findUser)
.post('/', createUser)
.delete('/:id', deleteUser)

export default userRouter