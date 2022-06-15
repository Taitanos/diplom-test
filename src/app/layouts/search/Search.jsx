import React, {useEffect, useState} from "react";
import s from "./Search.module.css";
import api from "../../api";
import {paginate} from "../../utils/paginate";
import Pagination from "../../components/Pagination";
import {useNavigate} from "react-router-dom";

function handler(e) {
    // alert(e.target.value);
}

const Search = () => {

    const navigate = useNavigate();
    const [allFlats, setAllFlats] = useState();
    const pageSize = 4;
    const count = allFlats && allFlats.length;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        api.flats.fetchAll().then(data => setAllFlats(data));
    }, []);
    let flats = paginate(allFlats, currentPage, pageSize);


    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    }
    const handleClickFlat = (id) => {
        navigate(`/search/${id}`)
    }


    return (
        <>
            <div className={s.container}>
                <form id={"submit"}>
                    <div className={s.search}>
                        <div>
                            <input className="opacity-50" type="text" defaultValue={"Страна посещения"}/>
                        </div>
                        <div>
                            <input type="date" onChange={handler}/>
                        </div>
                        <div>
                            <input type="date" onChange={handler}/>
                        </div>
                        <div>
                            <input className="opacity-50" type="text" defaultValue={"Количество людей"}/>
                        </div>
                        <div>
                            <button>Поиск</button>
                        </div>
                        <div>
                            <button>Сброс</button>
                        </div>
                    </div>
                </form>
                <div className={s.search_aparts}>
                    {flats.map((flat) => (
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