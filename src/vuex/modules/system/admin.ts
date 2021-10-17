import * as Admin from '@/axios/apis/system/admin';
import { router } from '@/router'
import { Store,ActionContext,Module } from 'vuex';
import { RootState } from '../../index';
import { AdminTableItem } from '@/interface/Admin';
import { BaseTableResponse } from '@/interface';
export const QUERYADMINTABLE = 'QUERYADMINTABLE';
export interface State {
    tableList: AdminTableItem[],
    tableTotal: number
}
export const admin:Module<State,any> = {
    state: {
        tableList:[],
        tableTotal: 0
    },
    mutations: {
        [QUERYADMINTABLE](state: State,payload:BaseTableResponse<AdminTableItem>):void{
            state.tableList = payload.list;
            state.tableTotal = payload.total;
        }
    },
    actions: {
        async [QUERYADMINTABLE](store:ActionContext<State,RootState>):Promise<void>{
            const res = await Admin.queryAdminTableList<any,BaseTableResponse<AdminTableItem>>({});
            store.commit(QUERYADMINTABLE,res)
        }

    },
    getters: {}
}