import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { ReactElement } from "react";
import Slider from "react-slick";
import { Box } from '@chakra-ui/react'

type CarouselProps = {
  items:  React.ReactElement[]
}

export const Carousel = (props: CarouselProps) => {
  const { items } = props;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  if(items?.length < 0 || !items) return null;

  return (
    <Slider {...settings}>
      {items.map((item) => item)}
    </Slider>
  );
}