import React, { useEffect, useState } from "react";
import CardSlider from "./CardSlider";
import { useNavigate, useParams } from "react-router-dom";
import EditProfile from "./EditProfile";
import EditInfo from "./EditInfo";

const Profile = () => {
    const { type } = useParams()
    const navigate = useNavigate()
    const [currentUrl, setCurrentUrl] = useState('')
    const [profile, setProfile] = useState({
        'name': 'Shahrukh Khan',
        'userName': 'king_khan_02',
        'img': 'https://m.economictimes.com/thumb/msid-96386453,width-1200,height-900,resizemode-4,imgsize-33928/srk-3-canva.jpg',
        'bio': 'A New Morning with a fresh start\n Photon in a double slit 💥💥',
        'link': ''
    })
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [editData, setEditData] = useState([])

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
        <div className="d-flex flex-column">
            <div className="text-center section-heading">
                Profile
            </div>

            <div className="post-display profile">
                <div className="d-flex flex-row justify-content-between p-4">
                    <div>
                        <h4>{profile.name}</h4>
                        <span>{profile.userName}</span>
                        <div className="profile-bio mt-4">
                            <p>{profile.bio.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}</p>
                        </div>
                        <div className="profile-followers mt-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVGvZFpVOHiAx9uFWo23BoSIBX6fo5ZrtFB6ZEh2NW8pbgUwZ" />
                            <span className="mx-3">4.0M followers</span>
                        </div>
                    </div>
                    <div className="profileImg">
                        <img src={profile.img} alt={profile.userName} />
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
        </div>
        <div class="modal fade" id="editProfileModal" tabindex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
            <EditProfile profile={profile} setText={setText} setTitle={setTitle} setEditData={setEditData} />
        </div>

        <div class="modal fade" id="editBioModal" tabindex="-1" aria-labelledby="editBioModalLabel" aria-hidden="true">
            <EditInfo type={title} text={text} editData={editData} />
        </div>
    </>
}

export default Profile