// import { service } from '@/axios/apis/auth';
import { get,post } from '../../axios';
import queryAdminTable from '@/mock/Admin.json';
// 获取验证码
export const queryAdminTableList = async <T,U>(data:T) => await get<T,U>('system/admin/list');
// export const queryAdminTableList = async <T,U>(data:T) => queryAdminTable;

// 登录
