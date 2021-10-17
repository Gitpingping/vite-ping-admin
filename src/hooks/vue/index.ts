import { ref, reactive,readonly } from 'vue';

export function useReactive<T extends Object>(obj:T){
    return reactive(obj)
}

export function useReadonly<T extends Object>(obj:T){
    return readonly(obj)
}