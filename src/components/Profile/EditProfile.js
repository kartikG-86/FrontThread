import React, { useState } from "react";

const EditProfile = ({ profile, setTitle, setText , setEditData}) => {

    const changeData = (type) => {
        setTitle(type)
        setText(profile[type])
    }
    return <>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-4" style={{ borderRadius: '1rem' }}>
                <div className="d-flex flex-row justify-content-between">
                    <div className="edit-profile-modal" style={{ width: '26rem' }} onClick={() => changeData('userName')} data-bs-toggle="modal" data-bs-target="#editBioModal">
                        <div className="edit-title">Name</div>
                        <div className="edit-subtitle">{profile.name} (@{profile.userName})</div>
                    </div>
                    <div className="editImg">
                        <img src={profile.img} />
                    </div>
                </div>

                <div className="edit-profile-modal mt-3" onClick={() => changeData('bio')} data-bs-toggle="modal" data-bs-target="#editBioModal">
                    <div className="edit-title">Bio</div>
                    <div className="edit-subtitle">
                        <p>
                            {profile.bio.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
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