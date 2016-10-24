const initialState = {
    counter: 0
};

export default function main(state = initialState, action) {
    switch( action.type ) {
    	case "SET_COUNT":
    		return {
    			...state,
    			counter: action.count
    		}

    }

    return state;
}