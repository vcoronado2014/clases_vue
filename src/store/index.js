
import { createStore } from 'vuex';

export const store = createStore({
    state(){
        return {
            superTitulo: 'Este es un supertitulo',
            superTituloDos: 'Super titulo dos'

        }
    },
    getters:{
        superTituloDos: state => state.superTituloDos,
    }
})

export default store
