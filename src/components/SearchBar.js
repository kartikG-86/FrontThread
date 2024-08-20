import React, { useEffect, useState } from "react";
import NewThread from "./NewThread";
import { Modal } from "bootstrap";

const SearchBar = () => {

    const [threads, setThreads] = useState([{
        text: '',
        image: '',
        id: 1
    }])

    const [backdrop, setBackdrop] = useState(true)
    useEffect(() => {
        const filterThread = threads.filter((thread) => thread.text != '')
        if (filterThread.length > 0) {
            setBackdrop(true)
            const modal = new Modal('#newThreadModal', {
                backdrop:'static',
                show:true
            })
            console.log(modal)

        }
        else {
            setBackdrop(false)
            const modal = new Modal('#newThreadModal', {
                backdrop:false,
                hide:true
            })
        }
    }, [threads])
    return <>
        <div class="my-3 p-3 d-flex flex-row justify-content-between search-bar" id="modal" data-bs-toggle="modal" data-bs-target="#newThreadModal">
            <div>
                <img className="profile-image" src="https://scontent.cdninstagram.com/v/t51.2885-19/373203005_780198887447897_7768777852907889655_n.jpg?stp=dst-jpg_s150x150&_nc_cat=104&ccb=1-7&_nc_sid=07cfa3&_nc_ohc=38-riMDWIcQQ7kNvgHYBRgf&_nc_ht=scontent.cdninstagram.com&oh=00_AYCjXI3x0GIMgXxGf4giY3eNRjLCJ9FDVctoOc-NjdN8zQ&oe=66C4C0FE" alt="profileImage" />
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