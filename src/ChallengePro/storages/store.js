import { createStore } from 'vuex';
import { AccessService } from '@/ChallengePro/services/access.service.js';

export default createStore({
    state: {
        user: null,
    },

    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        logout(state) {
            state.user = null;
        },
    },

    actions: {
        async authenticate({ commit }, userCredentials) {
            const service = new AccessService();

            try {

                const user = await service.authentication(userCredentials);


                commit('setUser', user);
                localStorage.setItem('authenticatedUser', JSON.stringify(user));
            } catch (error) {
                console.error('Autenticación fallida:', error.message);
                throw new Error('Credenciales incorrectas');
            }
        },

        loadUserFromStorage({ commit }) {
            const user = JSON.parse(localStorage.getItem('authenticatedUser'));
            if (user) {
                commit('setUser', user);
            }
        },


        logout({ commit }) {
            commit('logout');
            localStorage.removeItem('authenticatedUser');
        },
    },

    getters: {
        isAuthenticated(state) {
            return state.user !== null; // Verificar si hay un usuario autenticado
        },
        getUser(state) {
            return state.user; // Retornar el usuario
        },
    },
});
