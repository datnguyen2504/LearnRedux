

const initialState = {
    list: [],
    actived: null,
    testData: null,
    dataApi: [],
    dataProduct: []
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
                dataApi: action.payload
            }
        }

        case 'SET_ACTIVED': {
            const newActiveID = action.data.id;
            return {
                ...state,
                actived: newActiveID
            }
        }

        case 'GET_DATA_PRODUCT': {
            return {
                ...state,
                dataProduct: action.payload
            }
        }

        default: {
            return state;
        }

    }
}

export default hobbyReducer

