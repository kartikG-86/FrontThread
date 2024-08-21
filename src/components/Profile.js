import React, { useState } from "react";

const Profile = () => {

    const [section , setSection] = useState('Threads')

    const changeSection = (sectionName) => {
      setSection(sectionName)
    }
    return <>
        <div className="post-display profile p-4">
            <div className="d-flex flex-row justify-content-between py-3">
                <div>
                    <h4>Shahrukh Khan</h4>
                    <span>king_khan_02</span>
                </div>
                <div className="profileImg">
                    <img src="https://m.economictimes.com/thumb/msid-96386453,width-1200,height-900,resizemode-4,imgsize-33928/srk-3-canva.jpg" />
                </div>
            </div>

            <div className="profile-bio">
                <p>A New Morning with a fresh start <br />
                Photon in a double slit 💥💥</p>
            </div>

            <div className="profile-followers">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVGvZFpVOHiAx9uFWo23BoSIBX6fo5ZrtFB6ZEh2NW8pbgUwZ" />
                <span className="mx-3">4.0M followers</span>
            </div>

            <div className="edit-profile mt-3 ">
                <button className="btn text-center">Edit profile</button>
            </div>
            <div className="row my-4 " style={{borderBottom:'1px solid rgba(75, 75, 75, 0.179)'}}>
                <div className={`col-4 pb-2  text-center ${section == 'Threads' ? 'profile-section':''}`} onClick={()=>changeSection('Threads')}>Threads</div>
                <div className={`col-4 pb-2  text-center ${section == 'Replies' ? 'profile-section':''}`} onClick={()=>changeSection('Replies')}>Replies</div>
                <div className={`col-4 pb-2  text-center ${section == 'Reposts' ? 'profile-section':''}`} onClick={()=>changeSection('Reposts')}>Reposts</div>
            </div>
        </div>
    </>
}

export default Profile