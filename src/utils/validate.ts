export default {
    required: (message: string = '此项必填',trigger: string = 'blur') => ({ required: true, message, trigger}),
    length: (min:number = 0, max:number = 16,trigger: string = 'blur') => ({ min, max, message: `长度范围在${min}-${max}`, trigger })
}