import React from "react";
import './hobbyList.css'



const HobbyList = ({ hobbyList, activedID, onHobbyClick }) => {
    // const { hobbyList } = props
    const handelClick = (hobby) => {
        if (onHobbyClick) {
            onHobbyClick(hobby);
        }
    }

    return (
        <ul className="hobby-list">

            {hobbyList?.map((hobby, key) => {
                return <li
                    key={key}
                    className={hobby.id == activedID ? 'active' : ''}
                    onClick={() => handelClick(hobby)}
                >
                    {hobby.title} </li>
            })}

        </ul>
    );
}

export default HobbyList