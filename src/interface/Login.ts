// 登录表单
export interface LoginForm {
    // 用户名
    userName: string,
    // 密码
    password: string,
    // 记住密码
    remember: boolean,
    // 验证码
    loginCode: string,
}

// 登录请求参数
export interface LoginParams {
    // 用户名
    username: string,
    // 密码
    password: string,
    // 记住密码
    remember?: boolean,
    // 验证码
    code: string,
    // 登录验证码(可删)
    uuid: string
}

// 登录返回
export interface LoginResponse<T>{
    token: string,
    user: T
}

// 登录返回用户信息
export  interface LoginResponseUser {
    username: string,
    password?: string,

}
// 获取验证码
export interface LoginCode {
    uuid?: string,
    img: string
}