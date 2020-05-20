import client from '../db/MySqlClient.ts';

export async function isSatisfiedBy(id:number) {
    const result = await client.query(`SELECT COUNT(*) count FROM user WHERE id = ?`, [id]);
    return result[0].count >= 1;
}