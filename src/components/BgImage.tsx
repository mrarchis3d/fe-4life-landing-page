import { useState, useRef, useEffect } from 'react';

export default function BGImage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;

    if (video && video.currentTime <= video.duration - 1) {
      setIsVideoLoaded(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener('timeupdate', handleVideoTimeUpdate);
    }

    return () => {
      if (video) {
        video.removeEventListener('timeupdate', handleVideoTimeUpdate);
      }
    };
  }, []);

  return (
    <div className="h-7/12 m-auto mt-14 mb-5 ">
      <video
      ref={videoRef}
        autoPlay
        loop
        muted
        poster="loading.gif"
        preload="auto"
        className="m-auto object-cover drop-shadow-2xl"
        onLoadedMetadata={()=> setIsVideoLoaded(true)}
      >
        <source src="bg_vid.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {isVideoLoaded && (
        <div className="text-center absolute lg:top-1/3 md:top-1/4 xs:top-36 top-20 left-1/2 -translate-x-1/2 text-white p-4 bg-gradient-to-r from-sky-500 to-indigo-500/75 rounded-2xl shadow-xl">
          <h1 className="md:text-4xl xs:text-lg text-sm leading-tight mb-3">
            <strong>4Life</strong> Transfer Factor<br /> <p className='md:text-lg text-sm'>¡Lo mejor para tu sistema inmune!</p> 
          </h1>
          <p className=" shadow-md md:text-xl xs:text-sm text-xs xs:mt-4 mt-1 bg-blue-200/75 p-4 rounded-full bg-gray-950">
            ¡Aprovecha YA! <br /> <strong className=' bg-gradient-to-l from-amber-400 to-red-500 text-transparent bg-clip-text'>HASTA UN 25% Dto</strong>
          </p>
        </div>
      )}
    </div>
  );
}
