import React from "react";

import "./components.css";


//"d-flex flex-column align-items-center bg-light-subtle border border-white border-5 rounded-5"

export default function EntityScore( { matchResultsForEntity, totalGames, years } ) {
    
    const allResults = years.reduce((accumulator, year) => {
        const statsForYear = matchResultsForEntity[year];
        Object.keys(statsForYear).slice(0,4).forEach(placement => {
            accumulator[placement] = accumulator[placement] + statsForYear[placement];
        })
        return accumulator;
    },{1:0,2:0,3:0,4:0}); 

    return (
        <div className="d-flex flex-column h-100 bg-light-subtle border border-white rounded-5 ">
            <h3 className="mt-3">Match Results:</h3>
            <div className="d-flex flex-column mx-5">
            { Object.values(allResults).map((results, placement) => {
                return (
                    <div key={placement} className={`entityScore${placement+1} d-flex justify-content-center align-items-center`}>
                        {placement === 0 ? (
                            <p className={`entityScore${placement+1} mb-0 w-50 d-flex justify-content-end`}>First:</p>
                        ): placement === 1 ? (
                            <p className={`entityScore${placement+1} mb-0 w-50 d-flex justify-content-end`}>Second:</p>
                        ): placement === 2 ?(
                            <p className={`entityScore${placement+1} mb-0 w-50 d-flex justify-content-end`}>Third:</p>
                        ):  (
                            <p className={`entityScore${placement+1} mb-0 w-50 d-flex justify-content-end`}>Fourth:</p>
                        )}

                        <p className={`entityScore${placement+1} mb-0 w-25`}>{results}</p>
                        <p className={`entityScore${placement+1} mb-0 w-50  d-flex`}> = {Math.round((results/totalGames)*100)}%</p>
                    </div>
                );
            })}
            </div>
            <div className="d-flex justify-content-center">
                <p className=" rounded-bottom  px-2" style={{ backgroundColor: "#8183a6" }} >Of {totalGames} games played.</p>
            </div>
        </div>
    );
};





