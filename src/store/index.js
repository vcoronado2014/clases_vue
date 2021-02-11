
import { createStore } from 'vuex';
import firebase from 'firebase';
export const store = createStore({
    state: {
        superTitulo: 'Este es un supertitulo',
        superTituloDos: 'Super titulo dos',
        usuarioLogueado: null
    },
    getters:{
        //superTituloDos: state => state.superTituloDos,
        mensajeTitulo(state){
            return state.superTituloDos
        }
    },
    actions:{
        setUserAction( context ){
            context.commit('setUser');
        }
    },
    mutations:{
        setUser(state){
            state.usuarioLogueado = firebase.auth().currentUser;
            console.log(state.usuarioLogueado);
        }
    }
})

export default store
