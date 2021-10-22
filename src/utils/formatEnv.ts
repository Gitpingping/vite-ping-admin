export function formatEnv<T>(envs):T{
    let data = {} as any;
    Object.keys(envs).forEach((key:string) => {
        if(key === 'VITE_PORT'){
            data[key] = Number(envs[key])
        }else{
            data[key] = envs[key]
        }
    })
    return data
}