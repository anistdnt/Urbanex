import React from 'react'
import all_product from '../Assets/all_product'
import Item from './Item'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
            onClick={onClick}
        />
    );
}

const RelatedProducts = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='w-[95%]'>
            <h1 className='text-center font-medium text-5xl underline decoration-black pb-12'>Related Products</h1>
            <Slider {...settings} >
                {
                    all_product && all_product
                        .filter(item => (props.category === item.category && item.id !== props.id))
                        .map((item, i) => (
                            <Item
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        ))
                }
            </Slider>
        </div>
    )
}

export default RelatedProducts
