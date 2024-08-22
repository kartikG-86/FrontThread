import React from "react";

const EditInfo = ({ type, text }) => {
    return <>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content new-thread-modal-content " >
                <div className=" d-flex flex-row justify-content-between">
                    <button className="btn" style={{color:'red',fontWeight:'600',fontSize:'1.1rem'}} data-bs-toggle="modal" data-bs-target="#editProfileModal">Cancel</button>
                    <div className="btn" style={{color:'white',fontWeight:'600',fontSize:'1.1rem'}}>Edit {type}</div>
                    <button className="btn" style={{color:'blue',fontWeight:'600',fontSize:'1.1rem'}} data-bs-toggle="modal" data-bs-target="#editProfileModal">Done</button>
                </div>
                <div className="d-flex p-4 edit-info  flex-row justify-content-between" style={{ borderRadius: '1rem' }}>
                    <div className="edit-profile-modal" style={{ width: '26rem' }}>
                        <div className="edit-title">{type}</div>
                        <textarea className="edit-subtitle">{text}</textarea>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default EditInfo