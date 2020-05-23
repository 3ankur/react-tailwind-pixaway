import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import SearchInput from './components/search-input';
import VideoCard from './components/videoCard';


function App() {

  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isImage, setIsImage] = useState(true);
  const loadImages = async () => {
    try {
      const res = await window.fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo`);
      const data = await res.json();
      setImages(data.hits);
    } catch (e) {

    }

  }

  const loadVideos = async () => {
    try {
      const res = await window.fetch(`https://pixabay.com/api/videos/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&pretty=true`);
      const data = await res.json();
      setVideos(data.hits);
    } catch (e) {

    }
  }

  const toggleVideo = (v) => {
    setIsImage(v)
  }

  useEffect(() => {
    isImage ? loadImages() : loadVideos();
  }, [searchTerm, isImage])

  return (
    <div className="container mx-auto">
      <SearchInput searchText={(text) => setSearchTerm(text)} swtichToVideo={toggleVideo} isImage={isImage} />
      <div className="grid  gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {

          isImage ?
            images.map((image) => {
              return (
                <ImageCard searchText={(text) => setSearchTerm(text)} key={image.id} imageData={image} />
              )
            }) :

            videos.map((video) => {
              return (
                <VideoCard searchText={(text) => setSearchTerm(text)} key={video.id} videoData={video} />
              )
            })
        }


      </div>
    </div>
  );
}

export default App;
