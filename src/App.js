import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import SearchInput from './components/search-input';
import VideoCard from './components/videoCard';


function App() {

  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isImage, setIsImage] = useState(true);
  const [lodePage, setLoadePage] = useState(1);
  const loadImages = async () => {
    try {
      const res = await window.fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&page=${lodePage}`);
      const data = await res.json();
      let nwAr = [...images, ...data.hits]
      setImages(nwAr);
    } catch (e) {

    }

  }

  const loadVideos = async () => {
    try {
      const res = await window.fetch(`https://pixabay.com/api/videos/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&pretty=true&page=${lodePage}`);
      const data = await res.json();
      let nwAr = [...videos, ...data.hits]
      setVideos(nwAr);
    } catch (e) {

    }
  }

  const toggleVideo = (v) => {
    setIsImage(v)
    setLoadePage(1);
    setImages([]);
  }

  useEffect(() => {
    isImage ? loadImages() : loadVideos();
  }, [searchTerm, isImage,lodePage])

  return (
    <div className="container mx-auto" data-testid="myapp">
      <SearchInput searchText={(text) =>  { setSearchTerm(text); setLoadePage(1); setImages([]);setVideos([]); }} swtichToVideo={toggleVideo} isImage={isImage} />
      <div className="grid  gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {

          isImage ?
            images.map((image,idx) => {
              return (
                <ImageCard key={`${image.id}_${idx}`} searchText={(text) => { setSearchTerm(text); setLoadePage(1); setImages([]);setVideos([]); } }  imageData={image} />
              )
            }) :

            videos.map((video,idx) => {
              return (
                <VideoCard key={ `${video.id}_${idx}`} searchText={(text) =>  { setSearchTerm(text); setLoadePage(1); setVideos([]); setImages([]); }}  videoData={video} />
              )
            })
        }

        
      </div>
      <div className="inset-x-0.bottom-0 p-4 text-center">
          <button onClick={()=>setLoadePage(lodePage+1)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Load more
</button>
        </div>
    </div>
  );
}

export default App;
