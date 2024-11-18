import axios from "axios"
import lodash from "lodash"
import { SERVER_API } from "../Helpers/serverUrl"

export const fetchCountryByNameAsync = async(name) => {
    return new Promise ((resolve,reject) => {

        axios({
            method:'get',
            url: `${SERVER_API}/name/${name}`,
        })
        .then((response) => {

            if (response.status !== 200) {
                throw new Error("Failed to fetch products")
            }

            var responseBody = {
                countries: lodash.get(response, "data", [])
            }

            return resolve(responseBody.countries)
        })
        .catch((err) => {
            console.log(err)
            return reject(err)
        })
    })
}

export const fetchCountriesBySearchAsync = async(type,SearchText) => {

    return new Promise ((resolve,reject) => {

        axios({
            method:'get',
            url: `${SERVER_API}/${type}/${SearchText}`,
        })
        .then((response) => {

            if (response.status !== 200) {
                throw new Error("Failed to fetch products")
            }

            var responseBody = {
                countries: lodash.get(response, "data", [])
            }

            return resolve(responseBody.countries)
        })
        .catch((err) => {
            console.log(err)
            return reject(err)
        })
    })
}

const fetchCountriesAsync = async() => {
    let countries = new Promise((resolve, reject) => {


        axios({
            method: "get",
            url: `${SERVER_API}/all`,
        })
            .then((response) => {

                if (response.status !== 200) {
                    throw new Error("Failed to fetch products")
                }

                var responseBody = {
                    countries: lodash.get(response, "data", [])
                }

                return resolve(responseBody.countries)
            })
            .catch((err) => {
                console.log(err)
                return reject(err)
            })
    })
    return countries

}


export default fetchCountriesAsync