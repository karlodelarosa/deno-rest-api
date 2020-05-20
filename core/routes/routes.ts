import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getAllUsers, getUser, addUser, deleteUser, updateUser } from '../controller.ts';

const router = new Router()
router.get("/all", async (context) => {
    context.response.body = Object.freeze(getAllUsers).rows;
})
.get("/user/id/:id", async (context) => {
    context.response.body = await getUser('id', context.params.id);
})
.get("/user/name/:name", async (context) => {
    context.response.body = await getUser('name', context.params.name);
})
.post("/user/add", addUser)
.put("/user/update/:id", updateUser)
.delete("/user/delete/:id", deleteUser)

export default router