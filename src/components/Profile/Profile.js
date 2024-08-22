import React, { useEffect, useState } from "react";
import CardSlider from "./CardSlider";
import { useNavigate, useParams } from "react-router-dom";
import EditProfile from "./EditProfile";
import EditInfo from "./EditInfo";

const Profile = () => {
    const { type } = useParams()
    const navigate = useNavigate()
    const [section, setSection] = useState('')
    const [currentUrl, setCurrentUrl] = useState('')

    useEffect(() => {
        setCurrentUrl(type ? type : 'Threads')
    }, [])
    const changeSection = (sectionName) => {
        setCurrentUrl(sectionName)
        navigate(`/userName/${sectionName}`)
    }

    const cardDetails = [
        {
            title: 'Add Profile Photo',
            desc: 'Make it easier for people to recognize you.',
            icon: 'bi-camera',
            btnText: 'Add'
        }, {
            title: 'Add Bio',
            desc: 'Introduce yourself and tell people what you’re into.',
            icon: 'bi-pencil',
            btnText: 'Add'

        }, {
            title: 'Follow 5 profiles',
            desc: 'Fill your feed with threads that interest you.',
            icon: 'bi-people-fill',
            btnText: 'See profiles'

        }, {
            title: 'Create thread',
            desc: 'Say what’s on your mind or share a recent highlight.',
            icon: 'bi-pencil-square',
            btnText: 'Create'

        }
    ]
    return <>
        <div className="post-display profile">
            <div className="d-flex flex-row justify-content-between p-4">
                <div>
                    <h4>Shahrukh Khan</h4>
                    <span>king_khan_02</span>
                    <div className="profile-bio mt-4">
                        <p>A New Morning with a fresh start <br />
                            Photon in a double slit 💥💥</p>
                    </div>
                    <div className="profile-followers mt-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVGvZFpVOHiAx9uFWo23BoSIBX6fo5ZrtFB6ZEh2NW8pbgUwZ" />
                        <span className="mx-3">4.0M followers</span>
                    </div>
                </div>
                <div className="profileImg">
                    <img src="https://m.economictimes.com/thumb/msid-96386453,width-1200,height-900,resizemode-4,imgsize-33928/srk-3-canva.jpg" />
                </div>
            </div>

            <div className="edit-profile mt-2 px-4">
                <button className="btn text-center" data-bs-toggle="modal" data-bs-target="#editProfileModal">Edit profile</button>
            </div>
            <div className="row my-4 ">
                <div className={`col-4 pb-2 profile-posts-section   text-center ${currentUrl.includes('Threads') ? 'profile-section' : ''}`} onClick={() => changeSection('Threads')}>Threads</div>
                <div className={`col-4 pb-2 profile-posts-section  text-center ${currentUrl.includes('replies') ? 'profile-section' : ''}`} onClick={() => changeSection('replies')}>Replies</div>
                <div className={`col-4 pb-2 profile-posts-section  text-center ${currentUrl.includes('reposts') ? 'profile-section' : ''}`} onClick={() => changeSection('reposts')}>Reposts</div>
            </div>

            {currentUrl.includes('Threads') &&
                <div>
                    <div className="mx-4 d-flex flex-row justify-content-between">
                        <h6>Finish your profile</h6>
                        <span>4 left</span>
                    </div>
                    <CardSlider cardDetails={cardDetails} />
                </div>
            }
            {(currentUrl.includes('replies') || currentUrl.includes('reposts')) &&
                <div className="d-flex justify-content-center align-items-center no-posts" >
                    <span>No {currentUrl} yet</span>
                </div>
            }
        </div>

        <div class="modal fade" id="editProfileModal" tabindex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
            <EditProfile />
        </div>

        <div class="modal fade" id="editBioModal" tabindex="-1" aria-labelledby="editBioModalLabel" aria-hidden="true">
            <EditInfo type='bio' text='hi' />
        </div>
    </>
}

export default Profile