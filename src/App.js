import { SideBySideMagnifier } from "react-image-magnifiers";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "./App.css";

const App = () => {
  // State to maintain how many images to how in a slider:
  const [state, setState] = useState({
    images: [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ],
    currentImageUrl: "https://picsum.photos/id/1018/1000/600/",
  });

  // A function to set the the image in focus that was clicked:
  const setView = (event, index) => {
    setState({
      ...state,
      currentImageUrl: state.images[index].original,
    });
  };

  return (
    <div className="app">
      <div className="magnify-Image">
        <h1>Slider With Image Zoom Functionality</h1>
        <br />
        {/* Component that will show the image with zoom functionality */}
        <SideBySideMagnifier
          alwaysInPlace={false}
          className="image-to-magnify"
          fillAvailableSpace={false}
          imageSrc={state.currentImageUrl}
          largeImageSrc={state.currentImageUrl} // Optional
        />
        <br />
        {/* Component that will show Images thumbnails in a slider */}
        <ImageGallery
          items={state.images}
          onThumbnailClick={setView}
          showFullscreenButton={false}
          showPlayButton={false}
          showNav={false}
        />
      </div>
    </div>
  );
};

export default App;
