import { login } from "./login";

describe('login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert
    const mockEmail = 'andreolive@live.com';

    it('Deve retornar Verdadeiro se o login estiver correto', async () => {
        const response = await login(mockEmail);
        expect(response).toBeTruthy();
    });

    it('deve restornar falso com um email invalido', async () => {
        const response = await login('email@invalido.com');
        expect(response).toBeFalsy();
    });


})