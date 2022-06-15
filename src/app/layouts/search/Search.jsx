import React, {useState} from "react";
import s from "./Search.module.css";
import {paginate} from "../../utils/paginate";
import Pagination from "../../components/Pagination";
import {useNavigate} from "react-router-dom";
import SearchApartment from "../SearchApartment";


const Search = ({allFlats, setStartTrip, setEndTrip, startTrip, endTrip, toggleSearch, setToggleSearch}) => {

    const navigate = useNavigate();
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredFlat, setFilteredFlat] = useState()


    const count = toggleSearch ? filteredFlat && filteredFlat.length : allFlats && allFlats.length;


    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    }
    const handleClickFlat = (id) => {
        navigate(`/search/${id}`)
    }

    const handlerDateStart = (e) => {
        setStartTrip(Date.parse(e.target.value))
    }
    const handlerDateEnd = (e) => {
        setEndTrip(Date.parse(e.target.value))
    }




    const handlerToggleSearch = () => {
        return allFlats && setFilteredFlat(allFlats.filter((flat) => Date.parse(flat.start_rent) <= startTrip && Date.parse(flat.end_rent) >= endTrip))
    }


    // const handleFilterFlats = () => {
    //     const flats = handlerToggleSearch()
    //     return setFilteredFlat(flats)
    //     // setToggleSearch(true)
    // }
    const handleFilterFlats = () => {
        setToggleSearch(true)
        handlerToggleSearch()
        console.log("filterFlat = ", filteredFlat)
    }
    const handlerClearFlats = () => {
        setToggleSearch(false);
    }

    let flats = toggleSearch ? paginate(filteredFlat, currentPage, pageSize) : paginate(allFlats, currentPage, pageSize);

    // let flats = paginate(allFlats, currentPage, pageSize);
    console.log("flats = ", filteredFlat)
    return (
        <>
            <div className={s.container}>
                <form id={"submit"}>
                    <div className={s.search}>
                        <div>
                            <input className="opacity-50" type="text" defaultValue={"Страна посещения"}/>
                        </div>
                        <div>
                            <input type="date" onChange={handlerDateStart}/>
                        </div>
                        <div>
                            <input type="date" onChange={handlerDateEnd}/>
                        </div>
                        <div>
                            <input className="opacity-50" type="text" defaultValue={"Количество людей"}/>
                        </div>
                        <div>
                            <button onClick={handleFilterFlats} type={'button'}>Поиск</button>
                            <button onClick={handlerClearFlats} type={'button'}>Cброс</button>
                        </div>
                        <div>
                            <button>Сброс</button>
                        </div>
                    </div>
                </form>
                <div className={s.search_aparts}>
                    {flats && flats.map((flat) => (
                        <div className={s.search_apart} key={flat._id} onClick={() => handleClickFlat(flat._id)}>

                            <img className={s.search_icon} src={require(`../../assets/img/flats/${flat._id}/1.jpg`)}
                                 alt="Значок" onClick={() => {
                            }}/>

                            <div className={s.search_main}>
                                <div className={s.search_title}>
                                    Арендатор: {flat.user}
                                </div>
                                <div className={s.search_description}>
                                    {flat.description}
                                </div>
                            </div>
                        </div>
                    ))}
                    <Pagination itemsCount={count} pageSize={pageSize} currentPage={currentPage}
                                onPageChange={handlePageChange}/>
                </div>
            </div>
        </>
    )
}

export default Search;