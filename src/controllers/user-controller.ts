import { Request, Response, NextFunction } from "express";
import User from '../models/user-model'
import { IUser } from '../../types/index';
import asyncHandler from 'express-async-handler';

export const findUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
    const _id = req.params.id

    const foundedUser = await User.findOne({_id})

    res.status(200).json(foundedUser);
    } catch (error) {
    next(error);
    }
})

export const createUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
    const { name, username, email, phone, website } = req.body as IUser;

    const createdUser = await User.create({ 
        name,
        username,
        email,
        phone,
        website,
    });

    res.status(200).json(createdUser);
    } catch (error) {
    next(error);
    }
})

export const deleteUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
    const _id = req.params.id

    const deletedUser = await User.findOneAndRemove({_id});

    res.status(200).json(deletedUser);
    } catch (error) {
    next(error);
    }
})
