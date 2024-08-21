import React, { useEffect, useState } from "react";

const NewThread = ({ threads, setThreads }) => {

    const [threadReplyType, setThreadReplyType] = useState("Anyone")
    const replyType = ["Anyone", "Profiles you follow", "Mentioned only"]


    const changeThreadReply = (type) => {
        setThreadReplyType(type)
    }

    const addNewThread = () => {
        setThreads((prevThreads) => {
            return [...prevThreads, { text: '', image: '', id: prevThreads.length + 1 }]
        })
    }

    const changeInput = (e, id) => {
        // console.log(e.target.value , id)
        setThreads((prevThreads) => {
            return prevThreads.map((thread) => {
                if (thread.id === id) {
                    return { ...thread, text: e.target.value };
                }
                return thread;
            });
        });
    }

    const closeThread = (id) => {
        setThreads((prevThreads) => {
            return prevThreads.filter((thread) => thread.id !== id);
        });
    }
    return <>
        <div class="modal-dialog modal-dialog-centered" >
            <div class="modal-content new-thread-modal-content" >
                <div class="text-center new-thread-title mb-3">
                    New Thread
                </div>
                <div className="thread-modal">

                    <div class="modal-body ">
                        {threads.map((thread) => (
                            <div key={thread.id} className="d-flex flex-row mt-3">
                                <div>
                                    <img className="profile-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi8Y-G2pGAkummMURyyFLlIjvfii6A_fVBFA&s" alt="profileImage" />
                                </div>
                                <div className="d-flex flex-column mx-2">
                                    <div className="username d-flex flex-row justify-content-between">
                                        <h6>kartikgoyal0852</h6>
                                        {thread.id > 1 && <div className="close-btn" onClick={() => closeThread(thread.id)}><i class="bi bi-x-lg"></i></div>}
                                    </div>
                                    <div className="d-flex flex-row justify-content-between" >
                                        <div className="side-line" ></div>
                                        <div >
                                            <textarea className="input-message"
                                                placeholder="Start a thread..."
                                                onInput={(e) => {
                                                    e.target.style.height = "auto";
                                                    e.target.style.height = `${e.target.scrollHeight}px`;
                                                }}
                                                onChange={(e) => changeInput(e, thread.id)}
                                                value={thread.text}
                                            >
                                            </textarea>
                                            <div className="new-thread-icons">
                                                <i class="bi bi-images me-3"></i>
                                                <i class="bi bi-filetype-gif me-3"></i>
                                                <i class="bi bi-hash me-3"></i>
                                                <i class="bi bi-list-nested me-3"></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="add-new-thread d-flex flex-row">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi8Y-G2pGAkummMURyyFLlIjvfii6A_fVBFA&s" alt="profileImage" />
                            </div>
                            <div className="d-flex flex-column mx-2">
                                <h6 className="ms-2 mt-1" onClick={addNewThread}>Add to thread</h6>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer d-flex flex-row justify-content-between">
                        <div class="dropdown">
                            <a class="btn " data-bs-toggle="dropdown" aria-expanded="false">
                                {threadReplyType.includes('Mention') ? ` Profiles you mention` : threadReplyType} can reply and quote
                            </a>

                            <ul class="dropdown-menu">
                                {replyType && replyType.map((type, index) => (
                                    <li key={index} onClick={() => changeThreadReply(type)}>{type}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NewThread