import React from "react";

const ItemProduct = ({ dataProduct }) => {

    return (
        <div className="item-block">
            <img className="item-img" src={dataProduct.image}></img>

            <div >
                <p>Category: "{dataProduct.category}</p>
                <p>Title : {dataProduct.title}</p>
                <p>price : ${dataProduct.price}</p>
            </div>

        </div>

    )

}

export default ItemProduct