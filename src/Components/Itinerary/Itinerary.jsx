import { Money, Clock, ThumbsUp, Hash } from "@phosphor-icons/react";
import React, { useState } from 'react';
import Modal from '../ModalItinerary/ModalItinerary';

const Itinerary = ({ plan }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {setModalOpen(prev => !prev);
        console.log("togglemmodal");
        
    }

    if (!plan || Object.keys(plan).length === 0) {
        return <p>No hay datos disponibles.</p>;

    }
    return (
        <div className="flex justify-around flex-wrap items-center my-2 gap-2">
            {console.log(plan)}
            {plan.map((itenerary) =>
                <div key={itenerary._id} className="border-2 border-lime-300 w-2/3 md:w-2/6 lg:w-1/4  text-white  bg-brand-dark bg-opacity-70 text-center flex flex-col gap-2 items-center py-3 rounded-3xl mb-6 ">
                    <div>
                        <img className="w-32 h-32 rounded-full object-cover bg-white" src={`https://robohash.org/${itenerary.userName}`} alt="" />
                    </div>
                    <h1>{itenerary.title}</h1>
                    <div>
                        <p>Created by</p>
                        <h3>{itenerary.userName}</h3>
                    </div>
                    <div>
                        <div className="inline-flex gap-2">
                            {Array.from({ length: itenerary.price }, (_, index) => (
                                <Money key={index} size={28} color="currentColor" className="text-brand-hoverD z-10" />
                            ))}
                        </div>
                        <div className="flex gap-3 justify-center items-center ">
                            <Clock size={28} color="currentColor" className="text-brand-hoverD" />
                            <p>{itenerary.duration} hours</p>
                        </div>
                        <div className="flex gap-3 justify-center items-center ">
                            <ThumbsUp size={28} color="currentColor" className="text-brand-hoverD" />
                            <p>{itenerary.likes} likes</p>
                        </div>
                        <div className="flex gap-3 justify-center items-center ">
                            {itenerary.hashtags.map((hashtag) => (
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

            )}


        </div>

    )
}

export default Itinerary