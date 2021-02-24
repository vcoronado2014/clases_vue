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

        },
        usuarioLogueado: null
    },
    getters:{
        obtenerElemento1(state){
            return state.superTitulo;
        },
        getDirectionUser(state){
            return state.usuarioFirebase.direccion ? state.usuarioFirebase.direccion.calle : 'no definida';
        },
        //getters nuevo del usuariologueado
        isLoguedIn(state){
            return state.usuarioLogueado == null ? false : true;
        },
        emailUsuarioLogueado(state){
            return state.usuarioLogueado != null ? state.usuarioLogueado.user.email : ''
        }
    },
    actions:{
        setTituloAction(context, nuevoTitulo){
            context.commit('setTitulo', nuevoTitulo);
        },
        setUserAction(context, user){
            context.commit('setUser', user);
        }
    },
    mutations:{
        setTitulo(state, nuevoTitulo){
            state.superTitulo = nuevoTitulo;
        },
        setUser(state, user){
            state.usuarioLogueado = user;
            console.log(state.usuarioLogueado);
        }
    }
})
export default store