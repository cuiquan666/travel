import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:localStorage.getItem('citys') || '石家庄'
    },
    mutations:{
        changeCity(state,city){
            state.city=city
            localStorage.setItem('citys',city)
        }
    }
})