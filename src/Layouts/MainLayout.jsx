import React, { useEffect, useState } from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import Card from "../Components/Card";
import fetchCountriesAsync from "../api/fetchCountries";
import { fetchCountries, fetchCountriesBySeach } from "../Redux/countriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.countries);
  const [searchBy, setSearchBy] = useState("name");
  const [searchText, setSearchText] = useState("");
  const [bgColor, setBgColor] = useState(true);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const fetchBySearch = (text) => {
    if (!text) {
      dispatch(fetchCountries());
    } else {
      dispatch(fetchCountriesBySeach({ searchBy, text }));
    }
  };

  console.log(searchBy);

  return (
    <div
      className={`${bgColor ? "bg-white text-black" : "bg-black text-white"} `}
    >
      {/* Navbar */}
      <section className="w-full">
        <nav className="w-full h-16 flex justify-between border-b-2 shadow-md p-4">
          <div className="flex gap-2">
            <FaGlobeAfrica className="text-4xl text-blue-400 bg-green-300 rounded-full" />

            <div className="text-xl font-serif mt-1">Country Explorer</div>
          </div>

          <div onClick={() => setBgColor((val) => !val)} className="p-1">
            {bgColor ? (
              <MdDarkMode className="text-3xl" />
            ) : (
              <CiLight className="text-3xl" />
            )}
          </div>
        </nav>
      </section>

      {/* Main */}
      <section className="w-full ">
        <div className="max-w-[1200px] w-[80vw] mx-auto flex flex-col md:flex gap-5 p-4 ">
          <div>
            <label htmlFor="searchBy">
              {" "}
              Search By :
              <select
                id="searchBy"
                className={`${
                  bgColor ? "bg-white text-black" : "bg-black text-white"
                } w-32`}
                onChange={(e) => setSearchBy(e.target.value)}
              >
                <option value="name">Country Name</option>
                <option value="alpha">Country Code</option>
                <option value="currency">Currency</option>
                <option value="lang">Language</option>
                <option value="capital">Capital City</option>
                <option value="region">Region</option>
              </select>
            </label>
          </div>

          <input
            type="search"
            name=""
            id=""
            placeholder="Search here..."
            className={`${
              bgColor ? "bg-white text-black" : "bg-black text-white"
            } border border-gray-300 rounded-lg p-1 w-80 outline-none`}
            onChange={(e) => fetchBySearch(e.target.value)}
          />
        </div>
      </section>

      <section
        className="max-w-[1200px] w-[80vw] mx-auto  
      gap-5 p-4 grid xl:grid-cols-4 
      lg:grid-cols-3 md:grid-cols-2 
      xsm:grid-cols-1
    
      "
      >
        {data.length > 0 && !error ? (
          data.map((val, ind) => (
            <>
              <Link to={`/CountryDetails/${val.name.common}`}>
                <Card country={val} key={ind} />
              </Link>
            </>
          ))
        ) : (
          <div>
            {error ? (
              <div>No Countries Found</div>
            ) : (
              <div className="flex justify-center h-screen mt-10">
                <Oval
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default MainLayout;
