import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import HobbyList from "../component/HobbyList";
import { addNewHobby, getDataAPI, getDataProduct, setActiveHobby } from "../action/hobby";
import ItemProduct from "../common/ItemProduct";





const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
}

function HomePage() {

    const hobbyList = useSelector(state => state.hobby.list)
    const activeId = useSelector(state => state.hobby.actived)

    const dataProduct = useSelector(state => state.hobby.dataProduct)
    const dataList = useSelector(state => state.hobby.dataApi)


    const dispatch = useDispatch();

    const handleAddHobbyClick = () => {

        const newID = randomNumber();
        const newHobby = {
            id: newID,
            title: `Hobby ${newID}`
        }

        dispatch(addNewHobby(newHobby));
        // dispatch(fetchTodos)
        console.log(hobbyList)
    }

    dispatch(getDataProduct())

    console.log('DATAAAAA: ', dataProduct)

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }


    return (

        < div className="homepage-contain" >
            {dataProduct?.map((data, key) => {
                return <ItemProduct
                    dataProduct={data}
                />
            })}

        </div >

    )

}

export default HomePage