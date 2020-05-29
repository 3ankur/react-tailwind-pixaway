import React, { useState } from "react";
import ToggleButton from 'react-toggle-button';
import imgIcon from "../assets/icons/photo.png";
import videoIcon from "../assets/icons/video.png";

function SearchInput({ searchText, swtichToVideo, isImage }) {
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }
    return (
        <div>
            <div className="flex">
                <img src={imgIcon} />
                <ToggleButton
                activeLabel={"Image"}
                inactiveLabel={'Video'}
                    value={isImage}
                    onToggle={(value) => {
                        swtichToVideo(!value)
                    }} />
                <img src={videoIcon} />
            </div>

            <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
                <form onSubmit={onSubmit} className="w-full max-w-sm flex">
                    <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                        <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
                        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                            Search
          </button>

                    </div>


                </form>
            </div>

        </div>

    )
}
export default SearchInput;