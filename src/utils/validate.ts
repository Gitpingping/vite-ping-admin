import { FormItemRule } from 'naive-ui';
export default {
    required: (message: string = '此项必填',trigger: string = 'blur') => ({ required: true, message, trigger}),
    length: (min:number = 0, max:number = 16,trigger: string = 'blur') => ({ min, max, message: `长度范围在${min}-${max}`, trigger }),
    checkbox: (num = 0) => {
        return {
            required: true, 
            trigger: 'change',
            message: `至少选择${num + 1}项`,
            validator: (rules:FormItemRule,value: string[]) => {
                if(value.length <= 0){
                    return false
                }
                return true
            }
        }
    },
    date: (message: string = '此项必选',trigger: string = 'change') => ({ required: true, message, trigger,validator: (rules:FormItemRule,value: number) => {
        if(!value){
            return false
        }
        return true
    }}),
}