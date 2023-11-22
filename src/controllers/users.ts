import { deleteUserById, getUsers } from "../db/users"
import express from "express"

//controller to get users
export const getAllUsers = async (req: express.Request , res:express.Response) => {
    try {
        
       const users = await getUsers()

       return res.status(200).json(users)

    } catch (error) {
         console.log(error)
         return res.sendStatus(400)
    }
}

//controller to delete users
export const deleteUser = async (req:express.Request , res:express.Response) => {
    try {
        
      const {id} = req.params;

      const deletedUser = await deleteUserById(id)
      return res.json(deletedUser);

    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}