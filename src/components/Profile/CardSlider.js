import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const CardSlider = ({ cardDetails }) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className="card-slider-container p-3">
            <Slider {...settings}>
                {cardDetails.map((cardDetail, index) => (
                    <div className="col" key={index}>
                        <div className="card">
                            <div className="text-center mt-4  card-icon">
                                <i className={`bi ${cardDetail.icon}`}></i>
                            </div>
                            <div className="card-body">
                                <div className="card-title text-center">{cardDetail.title}</div>
                                <p className="card-text text-center">{cardDetail.desc}</p>
                            </div>
                            <button className="btn">{cardDetail.btnText}</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );

}
export default CardSlider
