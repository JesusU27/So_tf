import BaseService from './base.service.js';


export class AccessService extends BaseService {
    constructor() {
        super();
    }

    async register(user) {

        user.id = null;

        const userRegistered = await this.create('users', user);

        console.log(userRegistered);

    }
    async authentication(user){

        const users = await this.getAll('users');


        const foundUser = users.find(u => u.username === user.username);


        if (foundUser && foundUser.password === user.password) {
            console.log('Autenticación exitosa');
            return foundUser;
        } else {
            throw new Error('Credenciales incorrectas');
        }
    } catch (error) {
        console.error('Error en la autenticación:', error.message);
        throw new Error('Error en la autenticación');
    }
}