import client from '../db/MySqlClient.ts';
import { insert } from '../repository/user.ts';
import { UserInterface } from '../contract/userInterface.ts';
  
export async function addUser ({ request, response }: { request: any; response: any }) {
    const body = await request.body();
    const userInfo: UserInterface = body.value;
    let status = 200;

    if (userInfo.hasOwnProperty('name') && userInfo.hasOwnProperty('country')) {
      response.body = await insert(userInfo);
    } else {
      response.body = { "error": "Invalid request!" };
      status = 400;
    }
    
    response.status = status;
}