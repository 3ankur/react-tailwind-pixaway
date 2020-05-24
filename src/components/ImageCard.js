import React from "react";

function ImageCard({ imageData, searchText }) {
    const { webformatURL, tags, user, views, downloads, likes } = imageData;
    const tagList = tags && tags.split(',') || []
    return (

        
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={webformatURL} alt="Sunset in the mountains" />
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
                    tagList.map((item) => {
                        return (<span key={item} onClick={()=>searchText(item)} className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{`#${item}`}</span>);
                    })
                }


            </div>
        </div>
    )
}

export default ImageCard;