import React from "react";
import Footer from "./Footer";
import Header from "./Header";


function MainLayout(props) {
    return (
        <div className="main-layout">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default MainLayout;