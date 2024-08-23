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

    const sections = [{
        title: 'For you'
    }, {
        title: 'Following'
    }, {
        title: 'Liked'
    }, {
        title: 'Saved'
    },]

    const [currentSection, setCurrentSection] = useState(sections[0].title)
    const changeSection = (newSection) => {
        setCurrentSection(newSection)
    }
    return <>
        <div className="d-flex flex-column">

            <div class=" text-center section-heading dropdown">
                <a class="btn" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'black'}}>
                    {currentSection} <div className="section-heading-icon"><i class="bi bi-chevron-down"></i></div>
                </a>

                <ul class="dropdown-menu" style={{ width: '15rem' }}>
                    {sections && sections.map((section, index) => (
                        <div className="d-flex flex-row justify-content-between" onClick={() => changeSection(section.title)}>
                            <li key={index} >{section.title}</li>
                            {currentSection == section.title && <i class="bi bi-check-lg"></i>}

                        </div>
                    ))}
                </ul>

            </div>


            <div className="post-display">
                <SearchBar />
                {posts && posts.map((post) => (
                    <Post post={post} />
                ))}
            </div>
        </div>
    </>
}

export default PostDisplay
