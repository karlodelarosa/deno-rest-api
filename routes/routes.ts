import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getAllUsers } from '../handler/getAllUsers.ts';
import { getUser } from '../handler/getUser.ts';
import { addUser } from '../handler/addUser.ts';
import { updateUser } from '../handler/updateUser.ts';
import { deleteUser } from '../handler/deleteUser.ts';

const router = new Router()

router.get("/users", getAllUsers)
.get("/user/:id", getUser)
.post("/user", addUser)
.put("/user/:id", updateUser)
.delete("/user/:id", deleteUser)

export default router