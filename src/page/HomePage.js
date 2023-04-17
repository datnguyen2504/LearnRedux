import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import HobbyList from "../component/HobbyList";
import { addNewHobby, fetchTodos, setActiveHobby } from "../action/hobby";





const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
}

function HomePage() {

    const hobbyList = useSelector(state => state.hobby.list)
    const activeId = useSelector(state => state.hobby.actived)

    const testData = useSelector(state => state.hobby.testData)


    const dispatch = useDispatch();

    const handleAddHobbyClick = () => {

        const newID = randomNumber();
        const newHobby = {
            id: newID,
            title: `Hobby ${newID}`
        }

        dispatch(addNewHobby(newHobby));
        // dispatch(fetchTodos)
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    useEffect(() => {
        console.log('testData: ', testData);
    }, [testData])

    return (

        < div >
            <h1>Nguyễn Văn Đạt</h1>
            <button onClick={handleAddHobbyClick} >Click to add Hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                activedID={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div >

    )

}

export default HomePage