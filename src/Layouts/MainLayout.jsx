import React, { useEffect, useMemo, useState } from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import Card from "../Components/Card";
import fetchCountriesAsync from "../api/fetchCountries";
import { fetchCountries, fetchCountriesBySeach } from "../Redux/countriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { ClipLoader } from "react-spinners";
import Pagination from "../Components/Pagination";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.countries);
  const [searchBy, setSearchBy] = useState("name");
  const [searchText, setSearchText] = useState("");
  const [bgColor, setBgColor] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setcardsPerPage] = useState(16);

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

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const currentCards = [...data.slice(indexOfFirstCard, indexOfLastCard)];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${bgColor ? "bg-white text-black" : "bg-black text-white"} `}
    >
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
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <ClipLoader color="#4fa94d" size={80} loading={true} />;
          </div>
        ) : (
          <>
            {currentCards.length > 0 && data.length > 0 ? (
              currentCards.map((val, ind) => (
                <Link to={`/CountryDetails/${val.name.common}`}>
                  <Card country={val} key={ind} />
                </Link>
              ))
            ) : (
              <div className="flex justify-center items-center h-96">
                {/* {error ? ( */}
                <div className="text-xl font-semibold text-red-500">
                  No Countries Found
                </div>
                {/* ) : (
                 
                  <ClipLoader color="#4fa94d" size={80} loading={true} />
                )} */}
              </div>
            )}
          </>
        )}
      </section>

      <section>
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={data.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </section>
    </div>
  );
};

export default MainLayout;
