import * as ActionType from '../ActionType';

const initval = {
    isLoading: false,
    products: [],
    error: ''
}

export const productsreducer = (state = initval, action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                error: ''
            }
        case ActionType.LOADING_PRODUCTS:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case ActionType.ERROR_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                products: [],
                error: action.payload
            }
        case ActionType.ADD_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                products: state.products.concat(action.payload),
                error: ''
            }
        case ActionType.DELETE_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                products: state.products.filter((p) => p.id !== action.payload),
                error: ''
            }
        case ActionType.UPDATE_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                products: state.products.map((pu) => {
                    if(pu.id === action.payload.id){
                        return action.payload;
                    }else{
                        return pu;
                    }
                }),
                error: ''
            }
        default:
            return state;
    }
}