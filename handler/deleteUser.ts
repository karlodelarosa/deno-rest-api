import client from '../db/MySqlClient.ts';
import * as doesUserExist from '../specification/doesUserExist.ts';
import { remove } from '../repository/user.ts';

export async function deleteUser ({ params, response }: { params: any; response: any }) {
    const hasRecord = await doesUserExist.isSatisfiedBy(params.id);
    let responseMessage = {};
    let status = 200;

    if (hasRecord) {
      responseMessage = await remove(params.id);
    } else {
      responseMessage = { "error": "User not found!" };
      status = 400;
    }
    
    response.body = responseMessage
    response.status = status
}