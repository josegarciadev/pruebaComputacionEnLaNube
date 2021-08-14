import jwt from 'jsonwebtoken';
import { LoginType } from './userType';

const PRIVATE_KEY = 'artworkers2021FL';
const sign = jwt.sign;
export async function createToken(user: LoginType): Promise<string> {
   return sign({ id: user.id,email:user.email }, PRIVATE_KEY);
}