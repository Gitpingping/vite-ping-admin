// 搜索表单
export interface AdminSearchForm {
    // 管理员账户
    account: string,
    // 管理员名称
    name: string
}

// 表格列表
export interface AdminTableItem {
    id: string,
    // 管理员账户
    account: string,
    // 管理员名称
    name: string,
    // 管理员密码
    password: string,
    // 管理员状态
    state: AdminState
}
export enum AdminState {
    on = '开启',
    off = '关闭'
}