import React, { useEffect } from "react";


const Card = ({ country }) => {
  useEffect(() => {
   
  }, []);

  return (
<div   data-aos="flip-up">
<div

className="w-60 flex flex-col shadow-md rounded-lg transform transition hover:scale-105 hover:duration-300 bg-white"
>      <div className="">
      <img
        src={country.flags.png}
        alt=""
        className="rounded-t-lg w-full h-44 object-cover"
      />
    </div>
    <div className="flex flex-col gap-1 p-2">
      <div className="text-lg font-semibold text-black">
      <span className="font-normal text-gray-700">   Country:</span> {country.name.common}
      </div>
      <div className="text-lg font-semibold text-black">
      <span className="font-normal text-gray-700">   Capital: </span>{country.capital}
      </div>
      <div className="text-lg font-semibold text-black">
      <span className="font-normal text-gray-700">   Region: </span> {country.region}
      </div>
      
    </div>
  </div>
</div>
  );
};

export default Card;
