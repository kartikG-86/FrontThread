import React from "react";
import FollowUser from "./FollowUser";

const Post = ({ post }) => {
    return <>
        <div className="d-flex flex-row post p-2" >
            <div>
                <img src={post.profileImg} alt="profileImage" className="post-profile-image" />
                <span className="follow-btn" data-bs-toggle="modal" data-bs-target="#followModal"><i class="bi bi-plus"></i></span>
            </div>

            <div className="mx-2">
                <div className="d-flex flex-row">
                    <h6 style={{ fontWeight: '600' }}>{post.userName}</h6>
                    <span style={{ color: 'grey' }}>{post.time}</span>
                </div>
                {post.postData.map((data) => (
                    <div>
                        <div className="mt-2">
                            <p>{data.title}</p>
                        </div>
                        <div className="my-3">
                            {data.tags.map((tag) => (
                                <span>#{tag}</span>
                            ))}
                        </div>
                        <div>
                            <img src={data.image} className="post-image" />
                        </div>
                    </div>

                ))}
                <div className="d-flex flex-row post-icons my-3">
                    <div className="me-4">
                        <i class="bi bi-heart me-1"></i>
                        <span>{post.likes}</span>
                    </div>
                    <div className="me-4">
                        <i class="bi bi-chat me-1"></i>
                        <span>{post.comments}</span>
                    </div>
                    <div className="me-4">
                        <i class="bi bi-share me-1"></i>
                        <span>{post.repost}</span>
                    </div>
                    <div className="me-4">
                        <i class="bi bi-send me-1"></i>
                        <span>{post.share}</span>
                    </div>
                </div>
            </div>



        </div>

        <div class="modal fade" id="followModal" tabindex="-1" aria-labelledby="followModalLabel" aria-hidden="true">
            <FollowUser user={post} />
        </div>
    </>
}

export default Post