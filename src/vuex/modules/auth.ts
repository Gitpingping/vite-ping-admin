import * as Auth from '@/axios/apis/auth';
import { router } from '@/router'
import { Store,ActionContext,Module } from 'vuex';
import { RootState } from '../index';
import { LoginForm, LoginCode,LoginParams,LoginResponse,LoginResponseUser } from '@/interface/Login';
// import { BaseResponse } from '@/interface';
import { encrypt } from '@/utils/rasEncrypt';
export const QUERYLOGINCODE = 'QUERYLOGINCODE';
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export interface State {
    loginCode: string,
    loginState: boolean,
    loginUuid: string
}
export const auth:Module<State,any> = {
    state: {
        loginCode: '',
        loginState: false,
        loginUuid: ''
    },
    mutations: {
        [QUERYLOGINCODE](state:State,payload:LoginCode){
            state.loginCode = payload.img;
            state.loginUuid = payload.uuid;
        }
    },
    actions: {
        async [QUERYLOGINCODE]<T>(store:ActionContext<State,RootState>,params:T):Promise<void>{
            const res = await Auth.queryLoginCode();
            store.commit(QUERYLOGINCODE,JSON.parse(res))
        },
        async [LOGOUT](store:ActionContext<State,RootState>):Promise<void>{
            localStorage.clear();
            sessionStorage.clear();
            router.replace({
                name: 'Login'
            })
        },
        async [LOGIN](store:ActionContext<State,RootState>,params:LoginForm):Promise<LoginResponse<LoginResponseUser>>{
            return await Auth.sendLogin<LoginParams,LoginResponse<LoginResponseUser>>({
                username: params.userName,
                password: encrypt(params.password) as string,
                code: params.loginCode,
                uuid: store.state.loginUuid
            });
        },

    },
    getters: {}
}