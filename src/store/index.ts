import {createStore} from 'vuex'

interface State {
    count: number;
}

export default createStore({
    state() {
        return {
            count: 0,
        };
    },
    mutations: {
        increment(state: State) {
            state.count++
        }
    },
    actions: {
        increment({commit}) {
            commit('increment')
        }
    }
})
