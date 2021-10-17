export function useSelection(){
    return {
        type: 'selection',
    }
}

export function useRowKey(item):string | number{
    return item.id
}