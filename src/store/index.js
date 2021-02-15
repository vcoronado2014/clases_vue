import { createStore } from 'vuex';
export const store = createStore({
    state:{
        superTitulo: 'Este es un supertitulo',
        usuarioFirebase: {
            email: 'vcoro@gamil.com',
            username: 'vcoronado',
            nombre: 'Victor Hugo',
            direccion: {
                calle: 'cordon roma',
                numero: '0621',
                villa: 'entre rios',
                comuna: 'conchalí'
            },
            hobies:['Andar en moto', 'correr', 'hacer ejercicio'],

        }
    },
    getters:{
        obtenerElemento1(state){
            return state.superTitulo;
        },
        getDirectionUser(state){
            return state.usuarioFirebase.direccion ? state.usuarioFirebase.direccion.calle : 'no definida';
        }
    },
    actions:{
        setTituloAction(context, nuevoTitulo){
            context.commit('setTitulo', nuevoTitulo);
        }
    },
    mutations:{
        setTitulo(state, nuevoTitulo){
            state.superTitulo = nuevoTitulo;
        }
    }
})
export default store