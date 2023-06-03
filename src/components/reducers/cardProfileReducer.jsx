export const cardProfileReducer = (state, action) => {
    switch (action.type) {
        case "SHOW_MAIN":
            return {
                ...state,
                openMain: true,
                openProfile: false,         
            };
        case "SHOW_PROFILE":
            return {
                ...state,
                openMain: false,
                openProfile: true,        
            };
        default:
            return state;
    }
};