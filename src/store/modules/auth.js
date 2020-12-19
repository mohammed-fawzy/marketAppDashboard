import axios from 'axios';
const state = {
     admin: null,
};
const getters = {
     isAuthenticated: state => !!state.admin,
     StateUser: state => state.admin,
};
const actions = {
     async LogIn({commit}, User) {
          await axios.post('api/admin/login', User).then((response) => { 
               if(response.status == 200){
                    if (response.data.status == true) {
                         commit('setUser', response.data.data)
                    } 
               }
          })
     },
     async LogOut({commit}){
          let admin = null
          commit('LogOut', admin)
     }
};
const mutations = {
     setUser(state, admin){
         state.admin = admin
     },
     LogOut(state){
         state.admin = null
     },
 };
export default {
  state,
  getters,
  actions,
  mutations
};

export const namespaced = true