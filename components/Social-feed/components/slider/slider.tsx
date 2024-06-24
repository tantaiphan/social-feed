/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, useMemo, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderLayoutSettingModel } from "../../core/models/MetaType";
import { defaultLayout } from "../../core/libs/data/defaultData";
import Carousel from "react-multi-carousel";
import styled from "styled-components";

interface ComponentProps {
  items: any[];
  configCarousel?: SliderLayoutSettingModel;
  onRenderItem?: (val: any) => ReactNode;
}

export const SliderLayout: React.FC<ComponentProps> = (props) => {
  const { items, onRenderItem, configCarousel } = props;
  const itemSpace =
    configCarousel?.itemSpace ??
    defaultLayout.sliderLayoutSetting?.itemSpace ??
    10;

  const showDot =
    configCarousel?.showDot ?? defaultLayout.sliderLayoutSetting?.showDot;

  const showNavigation =
    configCarousel?.showNavigation ??
    defaultLayout.sliderLayoutSetting?.showNavigation;

  const autoPlay =
    configCarousel?.autoPlay ?? defaultLayout.sliderLayoutSetting?.autoPlay;

  const autoPlayTime =
    configCarousel?.autoPlayTime ??
    (defaultLayout.sliderLayoutSetting?.autoPlayTime || 2000);

  const swipe =
    configCarousel?.swipe ?? defaultLayout.sliderLayoutSetting?.swipe;

  const maxItem =
    configCarousel?.numberItems ||
    defaultLayout.sliderLayoutSetting?.numberItems ||
    10;

  const responsive = useMemo(() => {
    return {
      desktop: {
        breakpoint: { max: 3000, min: 900 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
  }, []);

  // Styled components
  const CarouselContainer = styled.div`
    width: 100%;
    margin: 0 auto;
  `;

  const Item = styled.div`
    display: flex;
    justify-content: center;
    height: 90%;
    margin: 0 auto;
    width: ${showNavigation ? "80%" : "100%"};
  `;

  const onRenderUI = useMemo(() => {
    return (
      <Carousel
        swipeable={swipe}
        draggable={true}
        showDots={showDot}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={autoPlay}
        autoPlaySpeed={autoPlayTime}
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={100}
        containerClass="carousel-container"
        removeArrowOnDeviceType={
          showNavigation
            ? ["tablet", "mobile"]
            : ["desktop", "tablet", "mobile"]
        }
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {items.map((item: any, index: number) => {
          if (index + 1 <= maxItem) {
            return <Item key={index}>{onRenderItem?.(item)}</Item>;
          }
          return null;
        })}
      </Carousel>
    );
  }, [
    showDot,
    showNavigation,
    autoPlay,
    autoPlayTime,
    itemSpace,
    swipe,
    items,
  ]);

  return (
    <>
      <CarouselContainer>{onRenderUI}</CarouselContainer>
    </>
  );
};
