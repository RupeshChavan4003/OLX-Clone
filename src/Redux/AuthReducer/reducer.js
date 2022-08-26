import * as types from "./actionTypes";

const initialState={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false
}

const reducer=(state=initialState,action)=>{
    const {type, payload}=action;
    switch(type){
        case types.USER_LOGIN_REQUEST:
            return{
                ...state,
                isLoading:true
            };
            case types.USER_LOGIN_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    isAuth:true,
                    token:payload,
                };

                case types.USER_LOGIN_FAILURE:
               return{
                ...state,
                isLoading:false,
                isAuth:false,
                token:"",
                isError:true,
                };
                default:
                    return state;
    }
};

export { reducer };