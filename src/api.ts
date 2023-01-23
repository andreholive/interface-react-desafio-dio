export interface UserData {
    email: string
    password: string
    name: string
}

const conta:UserData = {
    email: 'andreolive@live.com',
    password: '123456',
    name: 'André Cardoso'
}

export const api = new Promise<UserData>((resolve) => {
    setTimeout(() => {resolve(conta)}, 3000)
})