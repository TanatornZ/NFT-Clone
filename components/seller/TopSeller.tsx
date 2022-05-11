import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { seller } from "../../json/seller";
import Seller from "./Seller";
type Props = {};

function TopSeller({}: Props) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1
        },
      },
    ],
  };

  return (
    <div className="mt-12 ">
      <p className="text-white text-center text-2xl md:text-3xl font-bold">Top Seller</p>
      <Slider {...settings}>
        {seller.map((item, index) => (
          <Seller
            key={index}
            id={index}
            name={item.name}
            total={item.total}
            img={item.img}
          />
        ))}
      </Slider>
    </div>
  );
}

export default TopSeller;
