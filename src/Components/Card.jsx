import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ country }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
<div   data-aos="flip-up">
<div

className="w-60 flex flex-col shadow-md rounded-lg transform transition hover:scale-105 hover:duration-300 bg-white"
>      <div className="">
      {" "}
      <img
        src={country.flags.png}
        alt=""
        className="rounded-t-lg w-full h-44 object-cover"
      />
    </div>
    <div className="flex flex-col gap-1 p-2">
      <div className="text-xl font-semibold text-black">
        {" "}
        {country.name.common}
      </div>
    </div>
  </div>
</div>
  );
};

export default Card;
