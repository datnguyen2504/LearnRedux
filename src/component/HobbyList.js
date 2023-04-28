import React from "react";
import './hobbyList.css'



const HobbyList = ({ hobbyList, activedID, onHobbyClick, dataAPI }) => {
    // const { hobbyList } = props
    const handelClick = (hobby) => {
        if (onHobbyClick) {
            onHobbyClick(hobby);
        }
    }

    return (
        <ul className="hobby-list">

            {/* {hobbyList?.map((hobby, key) => {
                return <li
                    key={key}
                    className={hobby.id == activedID ? 'active' : ''}
                    onClick={() => handelClick(hobby)}
                >
                    {hobby.title} </li>
            })} */}

            {dataAPI?.map((data, key) => {
                return <li
                    key={key}
                    className={data.id == activedID ? 'active' : ''}
                    onClick={() => handelClick(data)}
                >
                    {data.tagline}
                </li>
            })}

            <li>

            </li>
        </ul>
    );
}

export default HobbyList