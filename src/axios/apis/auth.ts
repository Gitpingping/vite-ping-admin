// import { service } from '@/axios/apis/auth';
import { get,post } from '../axios';
// 获取验证码
export const queryLoginCode = async () => await get<unknown,string>('auth/code');

// 登录
export const sendLogin = async <T,U>(data:T) => await post<T,U>('auth/login',data);
