export interface BaseListSearchForm {
    name: string,
    startTime: number | string | Date,
    endTime: number | string | Date,
    createTime: number | string | Date,
}

export interface BaseListTableItem {
    id: string | number,
    name: string,
    avatar: string,
    address: string,
    startTime: number,
    endTime: number,
    createTime: number,
}


