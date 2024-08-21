import React, { useEffect, useState } from "react";
import NewThread from "./NewThread";

const SearchBar = () => {

    const [threads, setThreads] = useState([{
        text: '',
        image: '',
        id: 1
    }])

    return <>
        <div class="my-3 p-3 d-flex flex-row justify-content-between search-bar" id="modal" data-bs-toggle="modal" data-bs-target="#newThreadModal">
            <div>
                <img className="profile-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi8Y-G2pGAkummMURyyFLlIjvfii6A_fVBFA&s" alt="profileImage" />
                <span className="search-title mx-2"> Start a thread...</span>
            </div>
            <div>
                <button className="btn post-btn">Post</button>

            </div>

        </div>

        <div class="modal fade" id="newThreadModal" tabindex="-1" aria-labelledby="newThreadModalLabel" aria-hidden="false"  >
            <NewThread threads={threads} setThreads={setThreads} />
        </div>
    </>
}


export default SearchBar