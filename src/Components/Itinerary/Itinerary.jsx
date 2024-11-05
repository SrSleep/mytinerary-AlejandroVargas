import { Money, Clock, ThumbsUp, Hash } from "@phosphor-icons/react";
import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Modal from '../ModalItinerary/ModalItinerary';
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../../store/actions/itineraryActions";

const Itinerary = () => {
    const { city } = useSelector((state) => state.itineraryStore);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const idCity = searchParams.get('id')
    useEffect(() => {
        dispatch(getCity(idCity));
    }, [])

    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModal = () => { setModalOpen(prev => !prev) }


    return (
        <div className="flex justify-around flex-wrap items-center my-2 gap-2">
            {Array.isArray(city) ? (
                city.map((itinerary) => (
                    <div key={itinerary._id} className="border-2 border-lime-300 w-2/3 md:w-2/6 lg:w-1/4 text-white bg-brand-dark bg-opacity-70 text-center flex flex-col gap-2 items-center py-3 rounded-3xl mb-6 ">
                        <div>
                            <img className="w-32 h-32 rounded-full object-cover bg-white" src={`https://robohash.org/${itinerary.userName}`} alt="" />
                        </div>
                        <h1>{itinerary.title}</h1>
                        <div>
                            <p>Created by</p>
                            <h3>{itinerary.userName}</h3>
                        </div>
                        <div>
                            <div className="inline-flex gap-2">
                                {Array.from({ length: itinerary.price }, (_, index) => (
                                    <Money key={index} size={28} color="currentColor" className="text-brand-hoverD z-10" />
                                ))}
                            </div>
                            <div className="flex gap-3 justify-center items-center ">
                                <Clock size={28} color="currentColor" className="text-brand-hoverD" />
                                <p>{itinerary.duration} hours</p>
                            </div>
                            <div className="flex gap-3 justify-center items-center ">
                                <ThumbsUp size={28} color="currentColor" className="text-brand-hoverD" />
                                <p>{itinerary.likes} likes</p>
                            </div>
                            <div className="flex gap-3 justify-center items-center ">
                                {itinerary.hashtags.map((hashtag) => (
                                    <React.Fragment key={hashtag}>
                                        <Hash size={22} color="currentColor" className="text-brand-hoverD" />
                                        <p> {hashtag}</p>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <button type="button" onClick={toggleModal} className="items-center text-white font-medium rounded-lg text-sm p-2  md:px-3 md:py-2 text-center bg-brand-default hover:bg-brand-hoverD">
                            See more
                        </button>
                        <div className="p-5">
                            <Modal className="" isOpen={isModalOpen} onToggle={toggleModal}></Modal>
                        </div>
                    </div>
                ))
            ) : (
                <div className="h-[50vh] w-11/12 mb-2 text-custom-gradient flex items-center justify-center text-5xl text-center">
                    <p>No itineraries yet for this city</p>
                </div>
            )}
        </div>
    );


}

export default Itinerary