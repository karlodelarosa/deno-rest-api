import client from '../db/MySqlClient.ts';
import * as doesUserExist from '../specification/doesUserExist.ts';
import { UserInterface } from '../contract/userInterface.ts';
import { update } from '../repository/user.ts';

export async function updateUser ({ request, response, params }: { request: any; response: any; params: any }) {
    const body = await request.body()
    const userInfo: UserInterface = body.value 
    const hasRecord = await doesUserExist.isSatisfiedBy(params.id);
    let responseMessage = {};
    let status = 200;

    if (hasRecord) {
      responseMessage = await update(userInfo.name, userInfo.country, params.id);
    } else {
      responseMessage = { "error": "User not found!" };
      status = 400;
    }

    response.body = responseMessage;
    response.status = status;
}