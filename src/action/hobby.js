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
