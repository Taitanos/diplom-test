import React from "react";
import {useParams} from "react-router-dom";
import Apartment from "../components/apartment/Apartment";
import Search from "./search/Search";

const SearchApartment = () => {

    const params = useParams();
    const {apartmentId} = params;

    console.log("userId = ", apartmentId);


    return (
        <>
            {apartmentId ? <Apartment userId={apartmentId}/> : <Search/>}
        </>
    );
};

export default SearchApartment;
