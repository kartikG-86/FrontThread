import React from "react";

const FollowUser = ({ user }) => {
    return <>
        <div class="modal-dialog follow-user-modal modal-dialog-centered">
            <div class="modal-content p-3 follow-user">
                <div class="" >
                    <div className="d-flex flex-row justify-content-between follow-user-header" id="followModallLabel" >
                        <div className="userTitle">
                            <h4>{user.userName}</h4>
                            <p>tony_stark</p>
                        </div>
                        <div>
                            <img src={user.profileImg} />
                        </div>
                    </div>
                </div>
                <div className="text-truncate follow-user-bio">
                    You know Who I am <br />
                    Tributo Sr. Stark/Ironman/RDJ <br />
                    Próximos cosplays:Chaplin , Agente shield, Dr. Doolittle
                    TIKTOK eduavila77
                </div>
                <div className="totalFollowers">
                  198K Followers
                </div>
                <div className="mt-3">
                    <button type="button" class="btn btn-dark follow-user-btn">Follow more</button>
                </div>
            </div>
        </div >
    </>
}

export default FollowUser