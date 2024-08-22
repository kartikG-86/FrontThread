import React, { useState } from "react";
import EditInfo from "./EditInfo";

const EditProfile = () => {

    const [type,setType] = useState('')
    const [text,setText] = useState('')

    const changeData = (newTitle,newText) => {
        setType(newTitle)
        setText(newText)
    }
    return <>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-4" style={{ borderRadius: '1rem' }}>
                <div className="d-flex flex-row justify-content-between">
                    <div className="edit-profile-modal" style={{ width: '26rem' }}>
                        <div className="edit-title">Name</div>
                        <div className="edit-subtitle">Shahrukh Khan (@king_khan_02)</div>
                    </div>
                    <div className="editImg">
                        <img src="https://m.economictimes.com/thumb/msid-96386453,width-1200,height-900,resizemode-4,imgsize-33928/srk-3-canva.jpg" />
                    </div>
                </div>

                <div className="edit-profile-modal mt-3"  data-bs-toggle="modal" data-bs-target="#editBioModal">
                    <div className="edit-title">Bio</div>
                    <div className="edit-subtitle"> <p>A New Morning with a fresh start <br />
                        Photon in a double slit 💥💥</p></div>
                </div>
                <div className="edit-profile-modal mt-3">
                    <div className="edit-title">Link</div>
                    <div className="edit-subtitle"> + Add link</div>
                </div>

                <button className="btn btn-dark login-btn text-center mt-4" style={{ height: '3rem' }}>Done</button>
            </div>
        </div>

   
    </>
}

export default EditProfile