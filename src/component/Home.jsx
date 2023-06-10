import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CorouselCard from './CorouselCard';
import Footer from './Footer';

function Home() {
  const [corouselPhotos, setCorousel] = useState([]);

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        'https://api.pexels.com/v1/search?query=indian%20wedding',
        {
          headers: {
            Authorization:
              'JQ1UYhazr7VpDbCEo0kfzm6I7TwULg97HtJe1LCmBNvbBocJWfuVIFPS',
          },
        }
      );
      setCorousel(data.photos[0]);

      let i = 1;
      setInterval(() => {
        if (i > data.photos.length) {
          i = 0;
        }
        setCorousel(data.photos[i]);
        i++;
      }, 10000);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <div className=" bg-gradient-to-r from-pink-400 to-violet-400 ">
      <div className="p-8">
        <div>
          <img
            src={corouselPhotos?.src?.landscape}
            alt={corouselPhotos}
            className="shadow-2xl shadow-black rounded-xl w-full "
          />
        </div>
      </div>
      <h1 className="mt-5">
        <CorouselCard />
      </h1>
    </div>
  );
}

export default Home;
