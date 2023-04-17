

const initialState = {
    list: [],
    actived: null,
    testData: null
}

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {

            const newList = [...state.list]
            newList.push(action.data);
            // console.log(newList)
            return {
                ...state,
                list: newList
            };


        }

        case 'TEST_API': {
            return {
                ...state,
                testData: action.payload
            }
        }

        case 'SET_ACTIVED': {
            const newActiveID = action.data.id;
            return {
                ...state,
                actived: newActiveID
            }
        }

        default: {
            return state;
        }

    }
}

export default hobbyReducer

