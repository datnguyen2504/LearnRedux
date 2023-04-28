import callApiArticle from "../api/service"

export const addNewHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        data: hobby,
    }


}

export async function fetchTodos(dispatch) {
    const response = await callApiArticle.getListArticle()

    dispatch({ type: 'TEST_API', payload: response.data })
}

export const setActiveHobby = (active) => {
    return {
        type: 'SET_ACTIVED',
        data: active
    }
}

export function getDataAPI(active) {

    return async function getDataApiThunk(dispatch, _getstate) {
        const response = await callApiArticle.getListData(active)
        dispatch({ type: 'TEST_API', payload: response.data })
    }

}

export function getDataProduct() {
    return async function getDataApiThunk(dispatch, _getstate) {
        const response = await callApiArticle.getListDataProduct()
        dispatch({ type: 'GET_DATA_PRODUCT', payload: response.data })
    }
}

