import { CONTACT, PORTFOLIO, VIEWMYWORK } from "./constants";

const initialState = {
    viewMyWork: false,
}

export const scrollReducer = (state = initialState, action) => {
    console.log('state', state)
    switch (action.type) {
        case VIEWMYWORK:
            console.log(state.viewMyWork, 'return')
            return {
                ...state,
                viewMyWork: state.viewMyWork === false ? true : false
            }
        case PORTFOLIO:
            return {
                ...state,
                portfolio: state.portfolio === false ? true : false
            }
        case CONTACT:
            return {
                ...state,
                contact: state.contact === false ? true : false
            }
        default:
            return state;
    }
}