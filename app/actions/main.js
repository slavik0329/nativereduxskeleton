export function setCount (count) {
    return {
        type: "SET_COUNT",
        count
    }
}

export function incrementCount () {
    return (dispatch, getStore) => {
        const store = getStore();

        dispatch(setCount( store.main.counter + 1 ));
    }
}