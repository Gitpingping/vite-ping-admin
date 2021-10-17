export function formatEnv<T>(envs):T{
    let data = {} as any;
    Object.keys(envs).forEach((key:string) => {
        if(key === 'VITE_PORT'){
            data[key] = Number(envs[key])
            console.log(envs[key]);
        }else{
            data[key] = envs[key]
        }
    })
    console.log(data);
    return data
}