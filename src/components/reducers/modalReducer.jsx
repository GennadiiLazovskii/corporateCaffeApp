export const modalReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_CONTEST_MONTH':
            return {
                ...state,
                openContestMonth: true,
                openDescrActiveTask: false,
            };
        case 'SHOW_DESCR_ACTIVE_TASK':
            return {
                ...state,
                openContestMonth: false,
                openDescrActiveTask: true,
            };
        case 'HIDE_MODAL':
            return {
                ...state,
                openContestMonth: false,
                openDescrActiveTask: false,
            };
        default:
            return state;
    }
};

