import React from 'react';
import { useState } from 'react';

function CorouselCard() {
  return (
    <div>
      <div className="flex gap-5 justify-between ml-10 mr-10  pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 sm:gap-2 lg:grid-cols-4 gap-5 md:gap-5">
          <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-100 h-80 ">
            <img
              src="https://img.freepik.com/free-photo/room-with-flowers_1417-1549.jpg?size=626&ext=jpg"
              alt="kkk"
              className="min-h-full"
            ></img>
          </div>
          <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-100 h-80 ">
            <img
              src="https://img.freepik.com/free-photo/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees_8353-11019.jpg?t=st=1685891504~exp=1685892104~hmac=4e3c770812f48ead9555e216fbda3de5414d8da5f1f0e0b752e5646d2424740b"
              alt="kkk"
              className="min-h-full"
            ></img>
          </div>
          <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-100 h-80 ">
            <img
              src="https://img.freepik.com/free-photo/beautiful-pink-decorated-wedding-serving-with-centerpiece-lightening-candles_8353-10052.jpg?size=626&ext=jpg"
              alt="kkk"
              className="min-h-full"
            ></img>
          </div>
          <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-100 h-80 ">
            <img
              src="https://img.freepik.com/premium-photo/indian-wedding-haldi-decoration-groom-bride-yellow-color_143921-377.jpg"
              alt="kkk"
              className="min-h-full"
            ></img>
          </div>
        </div>
      </div>
      <div className=" flex gap-5 justify-between ml-10 mr-10  pb-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 sm:gap-2 lg:grid-cols-4 gap-5 md:gap-5">
          <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-100 h-80 ">
            <img
              src="https://img.freepik.com/free-photo/groom-bride-s-wedding-table-decorated-with-flowers-candles_8353-10400.jpg?size=626&ext=jpg"
              alt="p1"
              className="min-h-full"
            ></img>
          </div>
          <div className="  bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-100 h-80">
            <img
              src="https://img.freepik.com/premium-photo/indian-wedding-stage-decoration-with-flower-sofa_221414-542.jpg?size=626&ext=jpg"
              alt="p2"
              className="min-h-full"
            ></img>
          </div>
          <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black  w-100 h-80">
            <img
              src="https://img.freepik.com/premium-photo/wedding-decorations-wedding-backdrop-with-flowers-indonesian-wedding-decorations_697952-100.jpg?size=626&ext=jpg"
              alt="p3"
              className="min-h-full"
            ></img>
          </div>
          <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black  w-100 h-80">
            <img
              src="https://img.freepik.com/free-photo/beautiful-decorated-wedding-arch-near-sea_8353-9867.jpg?size=626&ext=jpg"
              alt="p3"
              className="min-h-full"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorouselCard;
