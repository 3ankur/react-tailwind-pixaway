import React, { useState } from "react";

function VideoCard({ videoData, searchText }) {
    const [showVideo, setShowVide] = useState(null);
    const { videos, tags, user, views, downloads, likes, picture_id } = videoData;
    const { tiny } = videos;
    const videoPicture = `https://i.vimeocdn.com/video/${picture_id}_295x166.jpg`
    const tagList = tags.split(',') || []


    const updateIt = (ev) => {
        if (ev === 'over') {
            setShowVide(true);
        } else {
            setShowVide(false);
        }
    }


    return (

        <div onMouseOver={() => updateIt('over')} onMouseLeave={() => updateIt('out')} className="max-w-sm rounded overflow-hidden shadow-lg">

            {
                !showVideo ? <img className="w-full" src={videoPicture} alt="Sunset in the mountains" /> :
                    <div className="w-full">
                        <video className="w-full" id="myBackgroundVideoID" autoplay="true" poster={videoPicture} muted loop  >
                            <source type="video/mp4" src={tiny.url} />
                        </video>
                    </div>
            }







            <div className="px-6 py-4">
                <div className="font-bold  text-red-400 text-xl mb-2">by {user}</div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {
                    tagList.map((item, idx) => {
                        return (<span key={`${item}_${idx}`} onClick={() => searchText(item)} className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{`#${item}`}</span>);
                    })
                }


            </div>
        </div>
    )
}

export default VideoCard;