import React from "react";
import {useParams} from "react-router-dom";
import Apartment from "../components/apartment/Apartment";
import Search from "./search/Search";

const SearchApartment = ({allFlats, setStartTrip, setEndTrip, startTrip, endTrip, toggleSearch, setToggleSearch}) => {

    const params = useParams();
    const {apartmentId} = params;

    console.log("userId = ", apartmentId);


    return (
        <>
            {apartmentId ? <Apartment userId={apartmentId}/> :
                <Search
                    allFlats={allFlats}
                    setStartTrip={setStartTrip}
                    setEndTrip={setEndTrip}
                    startTrip={startTrip}
                    endTrip={endTrip}
                    toggleSearch={toggleSearch}
                    setToggleSearch={setToggleSearch}
                />}
        </>
    );
};

export default SearchApartment;
