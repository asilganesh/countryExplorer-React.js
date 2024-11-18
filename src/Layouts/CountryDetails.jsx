import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryByName } from "../Redux/countriesSlice";
import { Link, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CountryDetails = () => {
  const dispatch = useDispatch();
  const { countryDetails } = useSelector((state) => state.countries);
  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    dispatch(fetchCountryByName(name));
   
  }, [name]);

  const languages = () => {
    let result = []
    for(let i in countryDetails.languages){
      result.push(countryDetails.languages[i])
    }
    return result
  }

  const currencies = () =>{
    let result ={}
    for(let i in countryDetails.currencies){
      result = countryDetails.currencies[i]
    }
    return result
  }

 
  return (
    <div className="home  mx-auto  flex justify-center bg-purple-100">
      <section data-aos="zoom-in" className="flex flex-col  py-5 px-5  gap-2 bg-slate-50">
      <div className="border p-5 text-center rounded-xl text-lg"> Country Details</div>

        <div  className="flex justify-center transform transition hover:scale-95">
          <img src={countryDetails.flags?.png} className=" rounded-lg shadow-md" />
        </div>
        <div  className="border p-3 text-start rounded-xl text-lg transform transition hover:scale-95"> 
          <span className="font-semibold">Country : </span> {countryDetails.name?.common}
        </div>
        <div className="border p-3 text-start rounded-xl text-lg transform transition hover:scale-95"> 
          <span className="font-semibold">Capital : </span> {countryDetails.capital}
        </div>
        <div className="border p-3 text-start rounded-xl text-lg transform transition hover:scale-95"> 
          <span className="font-semibold">Region : </span> {countryDetails.region}
        </div>
        <div className="border p-3 text-start rounded-xl text-lg transform transition hover:scale-95"> 
          <span className="font-semibold">Sub Region : </span> {countryDetails.subregion}
        </div>
        <div className="border p-3 text-start rounded-xl text-lg transform transition hover:scale-95"> 
          <span className="font-semibold">Language : </span> {languages().join(", ")}
        </div>
        <div className="border p-3 text-start rounded-xl text-lg flex gap-2  transform transition hover:scale-95 "> 
          <span className="font-semibold">Coat of arms : </span> 
        <img src={countryDetails.coatOfArms?.png} alt="" className="w-10 object-cover" ></img>
        </div>
        <div className="border p-3 text-start rounded-xl text-lg transform transition hover:scale-95"> 
          <span className="font-semibold">Area : </span> {countryDetails.area} km<sup>2</sup>
        </div>
        <div className="border p-3 text-start rounded-xl text-lg transform transition hover:scale-95"> 
          <span className="font-semibold">Population : </span> {countryDetails.population}
        </div>
        <div className="border p-3 text-start rounded-xl text-lg transform transition hover:scale-95"> 
          <span className="font-semibold">Currencies : </span> {currencies().name} ({currencies().symbol})
        </div>

        <div className="border p-3 text-start rounded-xl text-lg flex justify-evenly transform transition hover:scale-95"> 
          <span className="font-semibold">Borders  </span> 
          {
            countryDetails?.borders?.map(val=><>
            <Link to={`/CountryDetails/${val}`}><div  className="border p-1 w-14 m-1 bg-black text-white rounded-md">{val}</div></Link>
            </>)
          }
        </div>

        <div className="border p-3 text-start rounded-xl text-lg flex justify-center bg-red-300 transform transition hover:scale-95"> 
         <Link to={countryDetails.maps?.googleMaps}> <span className="font-semibold text-center">View On Maps</span> </Link>
        </div>
        <div>


        </div>
      </section>

     
    </div>
  );
};

export default CountryDetails;
