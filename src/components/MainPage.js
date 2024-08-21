import React from "react";
import Sidebar from "./Sidebar";
import PostDisplay from "./PostDisplay";
import { useLocation} from "react-router-dom";
import Profile from "./Profile";

const MainPage = () => {
    const location = useLocation()
    return <>
        <div className="row main-page">
            <div className="col-1" style={{height:'100vh'}} >
                <Sidebar />
            </div>
            <div className="col-10">
                <div className="d-flex flex-row justify-content-center" >
                    {location.pathname.includes('profile') && <Profile />}
                    {location.pathname.includes('threads') && <PostDisplay />}
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