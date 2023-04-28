import React from "react";

export default function Header() {
    return <div className="header-display">

        <div>
            <h3> Products </h3>
            <ul className="ul-header"   >
                <li style={{ color: "white" }} className="list-inline-item">Salessa</li>
                <li style={{ color: "white" }} className="list-inline-item">Dashboard</li>
                <li style={{ color: "white", content: "none" }} className="list-inline-item">Product</li>
            </ul>
        </div>

        <a style={{ margin: 80 }}>

            <button type="button">Creat Report</button>

        </a>
    </div>
}