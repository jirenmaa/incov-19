import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Incov = () => {
  const [globalCases, setGlobalCases] = useState([]);
  const [countriesCases, setCountriesCases] = useState([]);

  useEffect(() => {
    fetchGlobalCovidCases()
    fetchCountryCovidCases()
  }, []);

  const fetchGlobalCovidCases = async () => {
    await axios.get("https://coronavirus-19-api.herokuapp.com/all")
    .then((response) => {
      setGlobalCases(response.data);
    }).catch(() => {
      return
    })
  }

  const fetchCountryCovidCases = async () => {
    await axios.get("https://coronavirus-19-api.herokuapp.com/countries")
    .then((response) => {
      setCountriesCases(response.data.slice(1, 11));
    }).catch(() => {
      return
    })
  }

  function formatNumber(number) {
    return String(number).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  }

  return (
    <section className="m-8 space-y-24" data-name="covid-cases">
      <div className="flex flex-wrap justify-evenly">
        <div className="article">
          <div className="flex justify-center uppercase font-bold text-3xl mb-4 text-primary">global cases</div>
          <div
            className="covid flex justify-center bg-yellow-500 rounded-lg font-bold text-white text-5xl p-8"
            data-name="cases">
              <span>{formatNumber(globalCases.cases)}</span>
          </div>
        </div>
        <div className="article">
          <div className="flex justify-center uppercase font-bold text-3xl mb-4 text-primary">global deaths</div>
          <div
            className="covid flex justify-center bg-gray-500 rounded-lg font-bold text-white text-5xl p-8"
            data-name="deaths">
            <span>{formatNumber(globalCases.deaths)}</span>
          </div>
        </div>
        <div className="article">
          <div className="flex justify-center uppercase font-bold text-3xl mb-4 text-primary">global recovered</div>
          <div
            className="covid flex justify-center bg-green-500 rounded-lg font-bold text-white text-5xl p-8"
            data-name="recovered">
            <span>{formatNumber(globalCases.recovered)}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col pb-24">
        <div className="capitalize font-bold text-5xl text-primary mx-6">
          10 country with most many cases.
        </div>
        <div className="flex flex-wrap justify-evenly">
          {countriesCases.map((cases, index) => (
            <div className="top-10 bg-white shadow-lg rounded-lg" key={index}>
              <h1 className="bg-primary text-white rounded-t-lg text-3xl p-4">
                <span className="mr-2">{index + 1}.</span>{cases.country}
              </h1>
              <div className="info bottom-0 space-y-2 p-4">
                <div className="flex justify-between">
                  <span>cases </span>
                  <span>{formatNumber(cases.cases)}</span>
                </div>
                <div className="flex justify-between">
                  <span>deaths </span>
                  <span>{formatNumber(cases.deaths)}</span>
                </div>
                <div className="flex justify-between">
                  <span>today cases </span>
                  <span>{formatNumber(cases.todayCases)}</span>
                </div>
                <div className="flex justify-between">
                  <span>today deaths </span>
                  <span>{formatNumber(cases.todayDeaths)}</span>
                </div>
                <div className="flex justify-between">
                  <span>recovered </span>
                  <span>{formatNumber(cases.recovered)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Incov
