import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS } from "./actionType";

const initialState={
    isAuth:false,
    isLoading:false,
    isError:false,
    errorMessage:"",
    token:""
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:
            return{...state,isLoading:true}
        case LOGIN_SUCESS:
            return{...state,isLoading:false,isError:false,isAuth:true,Token:payload}
        case LOGIN_FAILURE:
            return{...state,isLoading:false,isError:true,errorMessage:payload}
        default:
            return state
    }
}