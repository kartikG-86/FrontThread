import React from "react";
import Sidebar from "./Sidebar";
import PostDisplay from "./PostDisplay";

const MainPage = () => {
    return <>
        <div className="row main-page">
            <div className="col-1" style={{height:'100vh'}} >
                <Sidebar />
            </div>
            <div className="col-10">
                <div className="d-flex flex-row justify-content-center" >
                    <PostDisplay />
                </div>
            </div>
            <div className="col-1" style={{height:'100vh'}}>
                <div className="d-flex flex-column justify-content-end align-items-end" style={{height:'100%'}}>
                    <button className="btn m-4 add-btn" >+</button>
                </div>
            </div>
        </div>
    </>
}

export default MainPage