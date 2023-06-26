import { userService } from "../../services/user.service.js"
export default {
    state(){
        return {
            user: null,
        }
    },
    mutations: {
        setUser(state, {user}){
            state.user = user
        }
    },
    actions: {
        loginUser ( {commit} ){
            console.log('newName:', newName)
            const user = userService.getUser(newName)
            commit({ type: 'setUser', user })
        }
    },
    getters: {
        user (state) {
            return state.user
        },
    },
}