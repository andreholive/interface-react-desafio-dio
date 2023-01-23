import { login } from "./login";

describe('login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert
    const mockEmail = 'andreolive@live.com';

    it('deve apresentar uma mensagem de boas vindas caso o email seja válido', async () => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
    });

    it('não deve exibir a mensagem de boas vindas sem o email', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo !')
    });

    it('deve exibir uma mensagem de erro caso o email seja invalido', async () => {
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email Inválido!')
    });


})