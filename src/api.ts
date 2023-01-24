import { UserData } from "./pages/Conta"

const conta:UserData = {
    id: '1',
    email: 'andreolive@live.com',
    password: '123456',
    name: 'André Cardoso',
    balance: 2000.00
}

export const api = new Promise<UserData>((resolve) => {
    setTimeout(() => {resolve(conta)}, 3000)
})