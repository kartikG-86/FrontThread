import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Post from "./Post";

const PostDisplay = () => {

    const [posts, setPosts] = useState([{
        userName: 'dsenthilarasu',
        time: '20h',
        profileImg: 'https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_640.jpg',
        postData: [{
            title: 'Today I learned how to read comments on Threads. You tap on the blank space next to the heart 🙄',
            image: 'https://media1.tenor.com/m/aQ7JU8GcbJoAAAAd/the-avengers-marvel.gif',
            tags: ['explore'],
        }],
        likes: '5.5K',
        comments: '29',
        repost: '10',
        share: '17'
    },])
    return <>
        <div className="post-display">
            <SearchBar />
            {posts && posts.map((post) => (
                <Post post={post} />
            ))}
        </div>
    </>
}

export default PostDisplay
