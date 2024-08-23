import React, { useEffect,useState } from "react";

const EditInfo = ({ type, text }) => {

    const [editText, setEditText] = useState(text);
    const [updateCount, setUpdateCount] = useState(0);

    useEffect(() => {
        setEditText(text);
        setUpdateCount((count) => count + 1); // Forces re-render
    }, [text]);

    const handleTextChange = (event) => {
        setEditText(event.target.value);
    };

    const resetState = () => {
        setEditText(text)
    }

    const toTitleCase = (str) => {
        return str
            .toLowerCase() // Ensure the string is in lowercase first
            .split(' ') // Split the string into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
            .join(' '); // Join the words back into a single string
    };

    return (
        <>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content new-thread-modal-content edit-info-modal">
                    <div className="d-flex flex-row justify-content-between edit-info-btns">
                        <button 
                            className="btn" 
                            style={{ color: 'red', fontWeight: '600', fontSize: '1.1rem' }} 
                            data-bs-toggle="modal" 
                            data-bs-target="#editProfileModal"
                            onClick={resetState}
                        >
                            Cancel
                        </button>
                        <div className="btn" style={{ color: 'white', fontWeight: '600', fontSize: '1.1rem' }}>
                            Edit {type}
                        </div>
                        <button 
                            className="btn" 
                            style={{ color: 'blue', fontWeight: '600', fontSize: '1.1rem' }} 
                            data-bs-toggle="modal" 
                            data-bs-target="#editProfileModal"
                            onClick={resetState}
                        >
                            Done
                        </button>
                    </div>
                  
                        <div className="d-flex p-4 edit-info flex-row justify-content-between" style={{ borderRadius: '1rem' }}>
                            <div className="edit-profile-modal" style={{ width: '26rem' }}>
                                <div className="edit-title">{toTitleCase(type)}</div>
                                <textarea
                                    key={`${text}-${updateCount}`} // This ensures re-render
                                    className="edit-subtitle"
                                    value={editText}
                                    onChange={handleTextChange}
                                
                                />
                            </div>
                        </div>
                
                </div>
            </div>
        </>
    );
};

export default EditInfo;
