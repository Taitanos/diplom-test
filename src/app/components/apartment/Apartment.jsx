import React, {useEffect, useState} from "react";
import s from "./Apartment.module.css";
import aparts from "../../assets/img/aparts.jpg";
import api from "../../api";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Apartment = ({userId}) => {

    const [flat, setFlat] = useState();
    useEffect(() => {
        api.flats.getById(userId).then((data) => setFlat(data));
    }, []);



    return (
        <>
            {flat && <div className={s.container}>
                <div className={s.apart}>
                    <div className={s.apart_info}>
                        <div className={s.apart_left}>
                            <div className={s.apart_info_data}>
                                <div className={s.apart_info_person}>
                                    <b> Информация о арендодателе (рейтинг/имя): </b>
                                   <br/> {flat.rate} / {flat.user}
                                </div>
                                <div className={s.apart_info_price}>
                                    <b>Информация о цене за время пребывания: </b>
                                    <br/> {flat.cost}
                                </div>
                                <div className={s.apart_info_button}>
                                    <button>Забронировать</button>
                                </div>
                            </div>
                            <div className={s.apart_info_mainpic}>
                                <Zoom>
                                    <img className={s.apart_info_image} src={require(`../../assets/img/flats/${userId}/1.jpg`)} alt="Значок" width={"200px"}/>
                                </Zoom>
                            </div>
                        </div>
                        <div className={s.apart_right}>
                            <div className={s.apart_info_pic}>
                                <Zoom>
                                    <img className={s.apart_info_image} src={require(`../../assets/img/flats/${userId}/2.jpg`)} alt="Значок" width={"200px"}/>
                                </Zoom>
                            </div>
                            <div className={s.apart_info_pic}>
                                <Zoom>
                                    <img className={s.apart_info_image} src={require(`../../assets/img/flats/${userId}/3.jpg`)} alt="Значок" width={"200px"}/>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                    <div className={s.apart_description}>
                        <b>тут идет описание:</b> {flat.description}
                    </div>
                    <div className={s.apart_reviews}>
                        <b> отзывы об апартаментах: </b>
                        {flat.review.map(r => (
                            <div key={r}>{r}</div>
                        ))}
                    </div>
                </div>
            </div>}

        </>
    )
}

export default Apartment;